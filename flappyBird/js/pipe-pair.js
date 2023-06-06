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
    }
    /*
    Draws out the PipePair. Will need to fill with initial color, and will
    eventually check to see if the PipePair needs to be highlighted.
    */
    draw() {
        fill(0);
        
    //will need to call rect() twice - once for the top pipe, and once
    //for the bottom pipe
    }
    /*
    Will be used to update the x-position of the PipePair.
    */
    update(){

    }
    /*
    Determines whether or not the PipePair is off screen.
    @return boolean Whether the PipePair is off screen
    */
    isOffScreen(){

    }
}
    