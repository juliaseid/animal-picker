import { hedgehogImageService } from './../src/animal-picker.js';
import { puppyImageService } from './../src/animal-picker.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Game } from './game.js';

function getElements(animalResponse, id) {
  if (animalResponse) {
    $('.images').html(`<img src = ${animalResponse.photos[0].src.medium} id = ${id}>`);
  } else {
    $('.images').text("Uh oh! We can't find any cute animals right now!");
  }
}



// function endGame(game) {
//   if (game.gameOver === true) {
//     $("#game").hide();
//     $("#ask").hide();
//     $("#score").show();
//   }
// }

$(document).ready(function() {
  let myGame = new Game;

  function checkForMatch(btnId) {
    let imgId = $('.images > img').attr('id');
   
    if(btnId === imgId) {
      myGame.addScore();
    } else {
      console.log("Wrong");
    }
  }
 
  async function getService() {
    let rand = Math.random();
    if (rand <= 0.5) {
      let hedgehog = new hedgehogImageService();
      let animalType = 'hedgie';
      const hedgieResponse = await hedgehog.getRandomHedgeHog();
      getElements(hedgieResponse, animalType);
      myGame.pictures.push(animalType);
    }
    else if (rand > 0.5) {
      let puppy = new puppyImageService();
      let animalType = 'puppy';
      const puppyResponse = await puppy.getRandomPuppy();
      getElements(puppyResponse, animalType);
      myGame.pictures.push(animalType);
    }
  }

  function endGame() {
    setTimeout(()  => {
        $("#game").hide();
        $("#correct").text(myGame.score);
        $("#score").show();
    }, 30000);
  }
  
  $("form#askStart").submit(function(event) {
    event.preventDefault();
    // myGame.timesUp();
    myGame.decreaseTimer();
    setInterval(() => {
      $('#countdown').text(myGame.timer);
    }, 1000);
    $("#game").show();
    $("#ask").hide();
    getService();
    endGame();

  
  });

  $("#puppy").click(function() {  
    myGame.clicks.push('puppy');
    getService();
    let id = $(this).attr('id');
    checkForMatch(id);
  
  });  

  $("#hedgie").click(function() {
    myGame.clicks.push('hedgie');
    getService();
    let id = $(this).attr('id');
    checkForMatch(id);

  });

  $("#reset").click(function() {
    location.reload();
  });



  
  
  
  
});

