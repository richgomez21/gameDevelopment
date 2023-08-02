const FIRE_KEY = 32; // space bar
let ship;
let asteroids = [];
let lasers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  createAsteroids();
  for (let i = 0; i < 5; i++) {
    asteroids.push(new Asteroid());
  }
  
}

function draw() {
  background(0);
  ship.draw();
  ship.update();

 

}

function renderShip(){
  
}

function renderLasers(){
    for(let i = lasers.length - 1; i >= 0; i--){
        lasers[i].update();
        lasers[i].draw();
   
        if(lasers[i].isOffScreen()){
           lasers.splice(i,1);
        }
       //  checkEnemyHit(lasers,i); 
      }
}

function checkAsteroidHit(laser, laserIndex){
  
}

function shatterAsteroid(asteroidIndex){

}

function renderAsteroids(){
    for(let i = asteroids.length - 1; i >= 0; i--){
        console.log("BNRRR")
        asteroids[i].update();
        asteroids[i].draw();
    }
}

function createAsteroids(){

}

function keyReleased() {
	// stop ship from rotating
}

function keyPressed() {
  if (keyCode == FIRE_KEY) {
		ship.shoot();

  } else if (keyCode == RIGHT_ARROW) {
    

  } else if (keyCode == LEFT_ARROW) {


  } 
}