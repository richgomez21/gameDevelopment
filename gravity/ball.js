class Ball {
    constructor() {
      this.x = 64;
      this.y = height / 2;
      this.gravity = 0.7;
      this.lift = -12;
      this.velocity = 0;
    }
    
    draw() {
      fill(255);
      ellipse(this.x, this.y, 32, 32);
    }
    
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
    
    up() {
      this.velocity += this.lift;
    }
  }