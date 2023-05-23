let x = 200;
let y = 200; // initial position of rectangle
let rectHeight = 50;
let rectWidth = 50;

function setup(){
    createCanvas(500, 500);
}

function draw(){
    background('black');
    rect(x, y, rectWidth, rectHeight);

    if (keyIsDown(UP_ARROW)) {
        y -= 10;
      }
    if (keyIsDown(DOWN_ARROW)) {
        y += 10;
      }

    // constrain(whatToConstrain, lowestValue, hightestValue)
    y = constrain(y, 0, height - rectHeight);
}