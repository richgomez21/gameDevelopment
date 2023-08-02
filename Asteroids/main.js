const FIRE_KEY = 32; // space bar
const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

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
 
  renderShip();
  renderAsteroids();
  renderLasers();
  keyPressed();
  

}

function renderShip(){
  ship.draw();
  ship.update();
}

function renderLasers(){
  for(let i = 0; i < lasers.length; i++){
      lasers[i].update();
      lasers[i].draw();
    }
}

function checkAsteroidHit(laser, laserIndex){
  
}

function shatterAsteroid(asteroidIndex){

}

function renderAsteroids(){
    for(let i = 0; i < asteroids.length; i++){
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
  if (keyIsDown(FIRE_KEY)) {
		lasers.push(ship.shoot())

  } else if (keyIsDown(RIGHT_ARROW)) {
    ship.turn(ship.setRotation(0.1));
   
  } else if (keyIsDown(LEFT_ARROW)) {
    ship.turn(ship.setRotation(-0.1));
  
  } 
}