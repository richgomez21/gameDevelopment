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
      return (this.pos).dist(asteroid.pos) <= asteroid.r;
             
    }
  
    isOffscreen() {
      
    }
  
  }