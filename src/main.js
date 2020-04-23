import { hedgehogImageService } from './../src/animal-picker.js';
import { puppyImageService } from './../src/animal-picker.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Game } from './game.js';

function getElements(animalResponse) {
  if (animalResponse) {
    console.log(animalResponse.photos[0].src.medium);
    $('.images').html(`<img src = ${animalResponse.photos[0].src.medium}>`);
  } else {
    $('.images').text("Uh oh! We can't find any cute animals right now!");
  }
}

function endGame(game) {
  if (game.gameOver === true) {
    $("#game").hide();
    $("#ask").hide();
    $("#score").show();
  }
}

$(document).ready(function() {
  let myGame = new Game;
 
  async function getService() {
    let rand = Math.random();
    if (rand <= 0.5) {
      let hedgehog = new hedgehogImageService();
      let animalType = 'hedgie'
      const hedgieResponse = await hedgehog.getRandomHedgeHog();
      getElements(hedgieResponse);
      myGame.pictures.push(animalType);
      }
    else if (rand > 0.5) {
      let puppy = new puppyImageService();
      let animalType = 'puppy'
      const puppyResponse = await puppy.getRandomPuppy();
      getElements(puppyResponse);
      myGame.pictures.push(animalType);
    }
  };
  
  $("form#askStart").submit(function(event) {
    event.preventDefault();
    myGame.decreaseTimer();
    setInterval(() => {
      $('#countdown').text(myGame.timer);
    }, 1000);
    $("#game").show();
    $("#ask").hide();
    getService();
  });

  $("#puppy").click(function() {  
    myGame.clicks.push('puppy');
    console.log(myGame.clicks);  
    getService(); 
  });

  $("#hedgie").click(function() {
    myGame.clicks.push('hedgie');
    console.log(myGame.clicks);
    getService();
  });
  
  
  
  myGame.timesUp();
  myGame.scoreUp();
  endGame(myGame);
  
});

