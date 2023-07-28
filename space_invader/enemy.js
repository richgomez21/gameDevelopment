
class Enemy{
    static SIZE = 30;
    static X_VELOCITY = .5;
    static DROP = 30;
  

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = Enemy.SIZE;
        this.xVelocity = Enemy.X_VELOCITY;
        this.hitEdge = false;
      
    }

    draw(){
        fill("black");
        rect(this.x, this.y, this.size, this.size);
    }

    update(){
        this.x += this.xVelocity;
    }
		
    leftEdge(){
        return this.x <= 0;
    }

    rightEdge(){
        return this.x + this.size >= width;
    }

   
        
    
}