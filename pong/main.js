let ball, leftPaddle, rightPaddle;
let bgImg = null;
let leftPaddleImg = null;
let rightPaddleImg = null;


function preload(){
    bgImg = loadImage('./assets/snowy_mountains.png');
    leftPaddleImg = loadImage('./assets/red_saber.png');
    rightPaddleImg = loadImage('./assets/blue_saber.png');
}

function setup(){
    createCanvas(500, 500);

    //create paddles and ball
    leftPaddle = new Paddle(leftPaddleImg, 10, height / 2);
    rightPaddle = new Paddle(rightPaddleImg, width - 20, height / 2, UP_ARROW, DOWN_ARROW);

    ball = new Ball(width / 2, height / 2);

};

function draw(){
    background(bgImg);

    //automatic paddle
    leftPaddle.update(ball);
    leftPaddle.draw();
    
    rightPaddle.update();
    rightPaddle.draw();

    ball.update();
    ball.draw();

    if(ball.hits(leftPaddle) || ball.hits(rightPaddle)){
        ball.changeDirection();
    }
};

class Ball{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.xVelocity = 2;
        this.yVelocity = 3;
    }

    draw(){
        fill(255, 100, 25)
        ellipse(this.x, this.y, this.width, this.height);
    }

    hasHitSideWall(){
        return this.x > width || this.x < 0;
    }

    hasHitTopBottomWall(){
        return this.y < 0 || this.y > height;
    }

    update(){
        this.x += this.xVelocity;
        this.y += this.yVelocity;

        if(this.hasHitSideWall()){
            //reset the game, have ball go to middle
            this.x = width / 2;
            this.y = height / 2;
        }

        if(this.hasHitTopBottomWall()){
            this.yVelocity = -this.yVelocity;
        }
    }
/**
 * Detects if ball hit paddle passed to it. 
 * @param {*} paddle 
 * 
 * @return boolean Whether the ball has hit the given paddle
 */

    hits(paddle){
        let withinVerticalRange = this.y > paddle.y && this.y < paddle.y + paddle.height;

        let withinHorizontalRange = (this.xVelocity > 0 ? 
                                        this.x > paddle.x &&this.x < paddle.x + paddle.width :
                                        this.x < paddle.x + paddle.width && this.x > paddle.x);
        return withinVerticalRange && withinHorizontalRange;
    }

    changeDirection(){
        this.xVelocity = -this.xVelocity;
    }

}

class Paddle{
    constructor(paddleImg, x, y, upKey = null, downKey = null){
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 80;
        this.speed = 5;
        this.upKey = upKey;
        this.downKey = downKey;
        this.paddleImg = paddleImg;
    }

    update(ball){
       if(this.upKey && this.downKey){//this is the user controlled paddle
            if(keyIsDown(this.upKey)){
                this.y -= this.speed;
            };

            if(keyIsDown(this.downKey)){
                this.y += this.speed;
            };
 
       }else{//this is the "computer"controlled paddle
            this.y = ball.y - this.height / 2;
       }

        //make sure paddles stay within canvas
        this.y = constrain(this.y, 0, height - this.height); 

    }

    draw(){
        fill(255);
        image(this.paddleImg, this.x, this.y, this.width, this.height);
    }
}