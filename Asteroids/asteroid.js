class Asteroid{
    // If the Asteroid's radius is smaller than this, we will not break
    // it up further - we will just destroy it.
    static SMALLEST_RADIUS = 10;
    
    constructor(pos, r) {
      if (pos) {
        this.pos = pos.copy();
      } else {
        this.pos = createVector(random(width), random(height));
      }
      if (r) {
        this.r = r * 0.5;
      } else {
        this.r = random(15, 50);
      }
  
      this.vel = p5.Vector.random2D();
      this.total = floor(random(5, 20));
      this.offset = [];
      for (let i = 0; i < this.total; i++) {
        this.offset[i] = random(-this.r * 0.5, this.r * 0.5);
      }
    }
  
      update() {
        this.pos.add(this.vel)   
        this.screenWrap();      
      }
  
      draw() {
        push();
        stroke(255);
        noFill();
        translate(this.pos.x, this.pos.y);
        this.#createShape();
        pop();
      }
  
      #createShape(){
        beginShape();
        for (let i = 0; i < this.total; i++) {
          let angle = map(i, 0, this.total, 0, TWO_PI);
          let r = this.r + this.offset[i];
          let x = r * cos(angle);
          let y = r * sin(angle);
          vertex(x, y);
        }
        endShape(CLOSE);
      }
  
      breakup(){
        let newAstArr = [];
        newAstArr.push(new Asteroid(this.pos, this.r))
        newAstArr.push(new Asteroid(this.pos, this.r))
        return newAstArr;
  
      }
  
      screenWrap() {
        if(this.pos.x < -this.r){
          this.pos.x = width + this.r;
        }else if(this.pos.x > width + this.r){
          this.pos.x = -this.r;
        }
        if(this.pos.y < -this.r){
          this.pos.y = height + this.r;
        }else if(this.pos.y > height + this.r){
          this.pos.y = -this.r;
        }
        
      }

    
  }