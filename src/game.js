export class Game {
 constructor () {
   this.score = 0;
   this.pictures = [];
   this.clicks = [];
   this.gameOver = false;
   this.timer = 30;
 }

  // This functionality now happens in main.js
  //  photoPick() {
  //   let rand = math.random();
  //   let animalType;
  //   if (rand > 0.5) {
  //     animalType = 'puppy';
  //   }
  //   else if (rand <= 0.5) {
  //     animalType = 'hedgie';
  //   }
  //   this.pictures.push(animalType);
  // };
  //
  // clickPick() {
  //   let click;
  //   this.clicks.push(click)
  // };

  scoreUp() {
    if (this.timer === 0) {
      for (let i=0; i < this.pictures.length; i ++) {
        if (this.pictures[i] === this.clicks[i]) {
          this.score ++
        }; 
      }
    }
  }; 

  timesUp() {
    setTimeout(()  => {
    this.gameOver = true
    }, 30000)
  };

  decreaseTimer() {
    setInterval(() => {
      this.timer -= 1
    }, 1000);
  };

};