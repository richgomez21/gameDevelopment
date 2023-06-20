class Player{
    //lift, speed, gravity
    static LIFT = -12;
    static SPEED = 5;
    static GRAVITY = 0.6;

    constructor(x, y, diameter){
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.radius = diameter / 2;
        this.velocity = 0;
    }

    draw(){
        fill(255);
        ellipse(this.x, this.y + this.radius, this.diameter, this.diameter);
    }

    isOnGround(){
        return this.y === height - player.diameter
    }

    rightEdge(){
        return this.x + this.radius;
    }

    leftEdge(){
        return this.x - this.radius;
    }

    bottomEdge(){
        return this.y + this.diameter;
    }
    yMinusDiameter(){
        return this.y - this.diameter;
    }

    update(){
        // Apply gravity
        this.velocity += Player.GRAVITY;
        this.y += this.velocity;
        if(this.y > height - this.diameter){
            this.y = height - this.diameter;
            this.velocity = 0;
        }

    }

    move(){
        if(keyIsDown(LEFT_ARROW)){//left arrow pressed
            this.x -= Player.SPEED;
        }
    
        if(keyIsDown(RIGHT_ARROW)){//right arrow pressed
            this.x += Player.SPEED;
        }
    
        //keep on the canvas
        //constrain(whatToConstrain, lowestValue, highestValue);
        this.x = constrain(this.x, this.radius, width - this.radius);
    }

    jump(){
        this.velocity += Player.LIFT;   
    }

}