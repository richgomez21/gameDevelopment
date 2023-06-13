let x;
let y;
let speed = 4;
let radius = 10;

function setup(){
    createCanvas(500, 500);
    x = width / 2;
    y = height - radius
}

function draw(){
    background(0);
    fill(255);
    ellipse(x, y, (radius * 2),(radius * 2));

    if(keyIsDown(LEFT_ARROW)){
        x -= speed;
    };

    if(keyIsDown(RIGHT_ARROW)){
        x += speed;
    };

    // keep on the canvas
    // constrain(whatToConstrain, lowestValue, highestValue);
    x = constrain(x, 0, width - radius);

}