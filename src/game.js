export class Game {
 constructor () {
   this.score = 0;
   this.pictures = [];
   this.clicks = [];
   this.gameOver = false;
 }

photoPick() {
  let rand = math.random();
  let animalType;
  if (rand > 0.5) {
    animalType = 'puppy';
  }
  else if (rand <= 0.5) {
    animalType = 'hedgie';
  }
  this.pictures.push(animalType);
};

clickPick() {
  let click;
  this.clicks.push(click)
};

scoreUp() {
  if (this.pictures[0] === this.clicks[0]) {
    this.score ++
  } 
} 

setInterval(() => {
  this.gameOver = true
, 30000);

}