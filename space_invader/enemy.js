
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

    hits(){
        for(let i = lasers.length - 1; i >= 0; i--){
          for(let j = enemies.length - 1; j >= 0; j--){
              if(lasers[i].x > enemies[j].x && lasers[i].x < enemies[j].x + this.size &&
                lasers[i].y > enemies[j].y && lasers[i].y < enemies[j].y + this.size){
                  lasers.splice(i, 1);
                }
          }
        }
      }
        
    
}