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

    for (let i = enemies.length - 1; i >= 0; i--) {
        for(let j = lasers.length - 1; j >= 0; j--){
            if (lasers[j].hits(enemies[i])) {
                enemies.splice(i, 1); 
                lasers.splice(j, 1);
            }
        }
    } 
 
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
        lasers.splice(i,1);
     }
    //  checkEnemyHit(lasers,i); 
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
        
        if(enemies[i].rightEdge() || enemies[i].leftEdge()){
            dropAndReverseDirection(enemies);
        }
    }
}

function dropAndReverseDirection(enemyarr){
    for(let i = 0; i < enemies.length; i++){
        enemies[i].y += Enemy.DROP;
        enemies[i].xVelocity = -enemies[i].xVelocity;
    }
}



// function checkEnemyHit(laser, laserIndex){
//     for(let i = enemies.length - 1; i >= 0; i-- ){
//         if(laser.hits(enemies[i])){
//             Enemy.explosionSound.play();
//             lasers.splice(laserIndex, 1);
//             enemies.splice(i,1);
//             return; 
//         }
//     }   
// }
    
    