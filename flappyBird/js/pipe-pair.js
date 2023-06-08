class PipePair{
    static WIDTH = 20;
    static SPEED = 2;
    /*
    Must set:
    - x (x-position of the PipePair)
    - top
    - bottom
    - width
    - speed
    - highlight (boolean representing if this PipePair must be highlighted)
    */
    constructor(x, top, bottom, WIDTH, SPEED, highlight){
        this.top = random(height / 2);
        this.bottom = random(height / 2);
        this.x = width;
        this.width = PipePair.WIDTH;
        this.speed = PipePair.SPEED;
        this.highlight = false;
        this.spacing = 150;
    }
    /*
    Draws out the PipePair. Will need to fill with initial color, and will
    eventually check to see if the PipePair needs to be highlighted.
    */
    draw() {
        fill(255);
        rect(this.x, 0, this.width, this.top);
        rect(this.x, height - this.bottom, this.width, this.bottom);

    //will need to call rect() twice - once for the top pipe, and once
    //for the bottom pipe
    }
    /*
    Will be used to update the x-position of the PipePair.
    */
    update(){
        this.x -= this.speed;
    }
    /*
    Determines whether or not the PipePair is off screen.
    @return boolean Whether the PipePair is off screen
    */
    isOffScreen(){
        return this.x < -this.width; 
    }
}
    