class Laser{
  
    constructor(shipPosVector, angle) {
      this.pos = createVector(shipPosVector.x, shipPosVector.y);
      this.vel = p5.Vector.fromAngle(angle);
      this.vel.mult(10);
      this.size = 5;
    }
  
    update() {
      this.pos.add(this.vel);
    }
  
    draw() {
        fill('red');
        ellipse(this.pos.x, this.pos.y, this.size);
    }
  
    hits(asteroid) {
      // hint: use the dist() function in p5 js   
             
    }
  
    isOffscreen() {
      
    }
  
  }