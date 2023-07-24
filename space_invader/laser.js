
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

    // hits(enemy){
    //   for(let i = lasers.length - 1; i >= 0; i--){
    //     for(let j = enemies.length - 1; j >= 0; j--){
    //         if(lasers[i].x > enemies[j].x && lasers[i].x < enemies[j].x + enemyWidth &&
    //           lasers[i].y > enemies[j].y && lasers[i].y < enemies[j].y + enemyHeight){
    //             lasers.splice(i, 1);
    //           }
    //     }
    //   }
    // }

}