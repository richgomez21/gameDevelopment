const FIRE_KEY = 32; // keycode for spacebar
const lasers = [];
const enemies = [];
const ENEMY_COLS = 6;
const ENEMY_ROWS = 5;

let player = null;
let explosionSound = null; // used when enemy is hit
let laserSound = null;


function preload(){    
    laserSound = loadSound('assets/laser_fire.mp3');

    Laser.fireSound = laserSound;
} 

function setup(){    
    createCanvas(600,600);
    player = new Player(width / 2, height - 10);

    createEnemyGrid();
} 

function draw(){  
    fill('red');
    background('grey');
    
    player.draw();
    player.move();

    renderLasers();
    renderEnemies();
} 

function createEnemyGrid(){
   //create grid of enemies
   for(let i = 0; i < ENEMY_COLS; i++){
        for(let j = 0; j < ENEMY_ROWS; j++){
            enemies.push(new Enemy(i * 80 + 80, j * 60 + 60));
        
        }
    }
}

function renderLasers(){
    //update and draw lasers from the array
   for(let i = lasers.length - 1; i >= 0; i--){
     lasers[i].update();
     lasers[i].draw();

     if(lasers[i].isOffScreen()){
        //remove from array
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

function renderEnemies(){
    for(let i = enemies.length - 1; i >= 0; i--){
        enemies[i].update();
        enemies[i].draw();
        // if(lasers[i].hits(enemies[i])){
        //     console.log("hit");
        // }
    }
}

function checkEnemyHit(laser, laserIndex){
    for(let i = 0; i < laser.length; i++ ){

    }
    
}

    /*
        The following are suggested methods to implement. You can
        take another approach, but these are some to consider if you
        become stuck. It would be good to group these functions next to
        others that are doing similar things (such as all the enemy functions
        being next to each other) for organization and readability of you code.
        
        Remember to consider where these methods should be called as well.
    */

    /*
    function renderEnemies(){
        // Update and draw all enemies		    
    }

    function dropEnemiesAndReverseDirection(){
        
    }
    */

    
    