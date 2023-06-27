const FIRE_KEY = 32;
const lasers = [];

let player = null;
let explosionSound = null;
let laserSound = null;


function preload(){    
    laserSound = loadSound('assets/laser_fire.mp3');

    Laser.fireSound = laserSound;
} 

function setup(){    
    createCanvas(600,600);
    player = new Player(width / 2, height - 10);
} 

function draw(){  
    fill('red');
    background('grey');
    
    player.draw();
    player.move();

    renderLasers();

   
    
} 

function renderLasers(){
    //update and draw lasers from the array
   for(let i = lasers.length; i>= 0; i--){
     lasers[i].update();
     lasers[i].draw();

     if(lasers[i].isOffScreen()){
        lasers.splice(i, 1);
     }
   }
    
}

function keyPressed(){
    if(keyCode == FIRE_KEY){
        //shoot a laser
        //add the laser to the laser array
        lasers.push(player.shoot());
        
        
    }
}