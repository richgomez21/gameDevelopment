
class Enemy{
    static SIZE = 40;
    static X_VELOCITY = 1;
    static DROP = 40;
  

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
		
    /*
        The following are suggested methods to implement. You can
        take another approach, but these are some to consider if you
        become stuck.
    */
    
    leftEdge(){
        return this.x <= 0;
    }

    rightEdge(){
        return this.x + this.size >= width;
    }
        
    
}