
class Laser{
    static SPEED = 5;
    static DIAMETER = 5;
    
    static fireSound = null;

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.diameter = Laser.DIAMETER;
        this.radius = this.diameter / 2;
    }

    draw(){
        fill('green');
        ellipse(this.x, this.y, this.diameter);
    }

    update(){
        this.y -= Laser.SPEED;
    }

    isOffScreen(){
        const isOffTopOfScreen = this.y + this.radius < 0;
        const isOffSideOfScreen = this.x + this.radius < 0 ||
                                    this.x - this.radius > width;

        return isOffTopOfScreen || isOffSideOfScreen;
    }

    hits(enemy){
        const distX = Math.abs(this.x - enemy.x - enemy.size / 2);
        const distY = Math.abs(this.y - enemy.y - enemy.size / 2);
    
        if (distX < (this.radius + enemy.size / 2) && distY < (this.radius + enemy.size / 2)) {
            return true;
        }
    
        return false;
      }


}