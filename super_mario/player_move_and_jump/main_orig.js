const SPACE_BAR = 32;
const NUM_PLATFORMS = 10;
 
let player = null;
let platforms = [];

function setup(){
    createCanvas(500, 500);

    player = new Player(width / 2, height - 20, 20);

    createEnvironment();
}

function draw(){
    background(0);

    player.update();
    player.draw();
    player.move();

    platforms.forEach(platform =>{
        platform.draw();
    })
}

function createEnvironment(){
    /*
        -loop NUM_PLATFORMS amount of times
            - for every iteration, create a platform
        -creating a platform:
            - random value
                -postition (x,y)
                    -bounded within the canvas
                -width
                    -but within the min & max widths of the Platform class
    */

    for(let i = 0; i < NUM_PLATFORMS; i++){
        const platformWidth = random(Platform.MIN_WIDTH, Platform.MAX_WIDTH);
        //get random x
        const x = random(width - platformWidth);
        // get random y
        const y = random(Platform.HEIGHT, height - Platform.HEIGHT);

        //make sure that platforms are not too close
        let tooClose = false;
        //loop thru platforms array to check if any are too close
        for(const platform of platforms){
            if(dist(x, y, platform.x, platform.y) < Platform.MIN_SPACING){
                tooClose = true;
                break;
            }
        }
        if(!tooClose){
            //add to array
            //create new platform
            platforms.push(new Platform(x, y, platformWidth))
        }else{
            i--;//try again
        }
    }
}

function keyPressed(){
    if(keyCode === SPACE_BAR && player.isOnGround()){
        player.jump();
    }
}