let x; 
let y;
let xSpeed;
let ySpeed;

let i = 0;



function setup() {
    createCanvas(400, 400);
    x = width/2;
    y = height/2;
    xSpeed = 2; 
    ySpeed = 5;
  }

function outOfSideBounds(){
  return x > width || x < 0;
}
  
function outOfUpperBounds(){
  return y < 0 || y > height;
}

  function draw() {
    background(0);
    fill(255, 100, 25)
    // i++;
    // console.log("i = " + i);
    ellipse(x, y, 100, 100);
    x += xSpeed;
    y += ySpeed;  

    if(outOfSideBounds()){
      xSpeed = -xSpeed
    }
    if(outOfUpperBounds()){
      ySpeed = -ySpeed
    }
    
    
  }