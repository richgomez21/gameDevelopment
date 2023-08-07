const FIRE_KEY = 32; // space bar
const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

let ship;
let asteroids = [];
let lasers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  for (let i = 0; i < 20; i++) {
    asteroids.push(new Asteroid());
  }
  
}

function draw() {
  background(0);
 
  renderShip();
  renderAsteroids();
  renderLasers();
  keyPressed();
  checkAsteroidHit(); 
 console.log(asteroids.length); 

}

function renderShip(){
  ship.draw();
  ship.update();
}

function renderLasers(){
  for(let i = lasers.length - 1; i >= 0; i--){
      lasers[i].update();
      lasers[i].draw();

     
    }
}

function checkAsteroidHit(){
  for(let i = asteroids.length - 1; i >= 0; i--){
    for(let j = lasers.length - 1; j >= 0; j--){
      if(lasers[j].hits(asteroids[i])){
        console.log("HIT")
        lasers.splice(j,1);
        if(asteroids[i].r > Asteroid.SMALLEST_RADIUS){
          shatterAsteroid(i);
        }
        asteroids.splice(i,1);
        return;
      }
    } 
  }
}

function shatterAsteroid(asteroidIndex){
 let newAsteroids = asteroids[asteroidIndex].breakup();
 asteroids = asteroids.concat(newAsteroids);
}

function renderAsteroids(){
    for(let i = 0; i < asteroids.length; i++){
        asteroids[i].update();
        asteroids[i].draw();
    }
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