class Player {
    static SPEED = 5;
    static DIAMETER = 20;
  
    constructor(x, y){
      this.x = x;
      this.y = y;
      this.diameter = Player.DIAMETER;
      this.radius = this.diameter / 2;
      
    }
  
    draw(){
      ellipse(this.x, this.y, this.diameter, this.diameter);
  
    }
  
    //todo: talk about why this needs to be a method. it is b/c the x will be changing.
    rightEdge(){
  
      return this.x + this.radius;
    }
  
    leftEdge(){
  
      return this.x - this.radius;
    }
  
    topEdge(){
      return this.y - this.radius;
    }
  
    bottomEdge(){
      return this.y + this.radius;
    }
  
    move(){
      // Move left or right
      if(keyIsDown(LEFT_ARROW)){
        this.x -= Player.SPEED;
  
      }else if (keyIsDown(RIGHT_ARROW)){
        this.x += Player.SPEED;
  
      }
      
      //make sure player cannot exit the canvas
      this.x = constrain(this.x, 0 + this.diameter / 2, width - this.diameter / 2);
    }

    shoot(){
      //TODO: implement
      Laser.fireSound.play();
      return new Laser(this.x, this.topEdge());
    }

  }