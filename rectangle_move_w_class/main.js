let rectangle;
let rectangle2;

function setup(){
    createCanvas(500, 500);
    // rect(x, y, rectWidth, rectHeight);
    rectangle = new Rectangle(200, 200, 50, 50);
    rectangle2 = new Rectangle(400, 400, 50, 50);
}

function draw(){
    background(0);

    //draw
    rectangle.draw();
    rectangle2.draw();

    //detect up motion
    if (keyIsDown(UP_ARROW)) {
        //then move rectangle
        rectangle.moveUp();
        rectangle2.moveUp();
    }
    //detect down motion
    if (keyIsDown(DOWN_ARROW)) {
        //then move rectangle
        rectangle.moveDown();
        rectangle2.moveDown();
    }
}

class Rectangle{
    // rect(x, y, rectWidth, rectHeight);
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // moveUp() moveDown() draw()

    draw(){
        rect(this.x, this.y, this.width, this.height);
    }

    moveUp(){
            this.y -= 10;
            this.y = constrain(this.y, 0, height - this.height);
          }
  

    moveDown(){
            this.y += 10;
            this.y = constrain(this.y, 0, height - this.height);
          }
}
    
