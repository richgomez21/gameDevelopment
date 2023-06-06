


function setup(){

}

class Bird {
    static WIDTH = 32;
    static X_POSITION = 64;
    static GRAVITY = 0.4;
    static LIFT = -12;
    /*
    Must set:
    - x
    - y
    - gravity (rate at which bird will fall)
    - lift (the amount to go against gravity when spacebar pressed)
    - velocity
    */
    constructor(x, y) {
        this.x = 64;
        this.y = height / 2;
        this.gravity = 0.6;
        this.lift = -10;
        this.velocity = 0;
    }
    //draws and colors the bird - use the ellipse() function to represent to bird
    draw() {
        fill(255)
        ellipse(this.x, this.y, 32, 32);
    }
    /* Used to update the bird's position, velocity, etc. */
    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        
        if (this.y > height) {
          this.y = height;
          this.velocity = 0;
        }
        if (this.y < 0) {
          this.y = 0;
          this.velocity = 0;
        }
      }
    
    /* Used to make the bird go up when the spacebar is hit. */
    up() {
        this.velocity += this.lift;
    }

}