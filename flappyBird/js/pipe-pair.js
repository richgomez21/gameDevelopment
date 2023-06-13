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
    constructor(){
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
        fill(255);
        if(this.highlight){
            fill(255, 0, 0)
        }
        rect(this.x, 0, this.width, this.top);

        rect(this.x, height - this.bottom, this.width, this.bottom);

    //will need to call rect() twice - once for the top pipe, and once
    //for the bottom pipe
    }

    hits(){
        if(bird.y < this.top || bird.y > height - this.bottom){
            if(bird.x > this.x && bird.x < this.x + this.width){
                this.highlight = true;
                return true;
            }
        }
        return false;
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
        // return this.x < -this.width; 
        if(this.x < -this.width){
            return true;
        }else{
            return false;
        }
    }
}
    