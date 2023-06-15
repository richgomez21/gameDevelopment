let bird;
const pipes = [];
const SPACE_BAR = 32;
const FRAME_AMOUNT = 100;
function setup() {
createCanvas(400, 600);

    //create the bird
bird = new Bird();
//populate the pipes array with one PipePair initially to start
pipes.push(new PipePair())

}
function draw() {  
    background(0);
    bird.draw();
    bird.update(); 
//draw and update the bird
//add a new PipePair every FRAME_AMOUNT frames
  if(frameCount % FRAME_AMOUNT === 0){
  //add pipes
    pipes.push(new PipePair());
  }
  for(var i = 0; i < pipes.length; i++){
    pipes[i].draw();
    pipes[i].update();
    pipes[i].hits(bird)
    if(pipes[i].isOffScreen()){
      pipes.splice(i, 1);
    }
  }
//render the pipes

}

function keyPressed() {
    if (keyCode == SPACE_BAR) {
      bird.up();
    }
  }

/*  
Add one new PipePair to the pipes array
*/
function addPipes(){
  pipes.push(new PipePair());
}
/*
Removes the pipe from the given index.
Use this method to remove pipes as they leave the screen
*/
function removePipe(pipeIndex){
  
}
/*
Will add PipePairs to the pipes array, draw the pipes, update the pipes,
detect collisions, and remove pipes once they leave the screen.
*/
function renderPipes(){
  for(let i = pipes.length - 1; i >= 0; i--){
//perform necessary operations described above in here.
    
  }
}
/*
Detects collisions between the bird and the PipePairs
@return boolean Whether the bird has collided with a PipePair
*/
function collision(bird, pipe){
/*
hint: it may be helpful to write helper functions which can
breakdown the collision detection into two discrete steps.
Perhaps one function to determine if the bird is within the y-value
range of being able to hit the PipePair, and another function to
then determine if the bird is touching the PipePair via the
x-coordinates.
*/
}