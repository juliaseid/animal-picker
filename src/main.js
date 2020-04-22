import { hedgehogImageService } from './../src/animal-picker.js';
import $ from "jquery";
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



$(document).ready(function() {
  $("form#askStart").submit(function(event) {
    event.preventDefault();
    console.log('click');
    $("#game").show();
    $("#ask").hide();

    (async () => {
      let hedgehog = new hedgehogImageService();
      const response = await hedgehog.getRandomHedgeHog();
      getElements(response);
    })();


    function getElements(response) {
      if (response) {
        console.log(response.photos[0].src.medium);
        $('.images').html(`<img src = ${response.photos[0].src.medium}>`);
      } else {
        $('.images').text("There was an error handling your request");
      }
    }
  });



});

//.onclick() match to value from animal-picker.js: if rand > .5 and user clicks "puppy", update score
//else if rand <=.5 and user clicks "hedgehog", update score
//else score unchanged
//show next image
//timeout function stops game play after 30 seconds & displays score