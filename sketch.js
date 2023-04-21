let pos;

let balls = [];

function setup(){
    createCanvas(500, 500);

    // pos1 = createVector(4,3);
    // pos2 = createVector(3,6);

    // let resultVec = p5.vector.sub(pos1, pos2);

    for(let i = 0; i<10; i++){
        let randomNum = floor(random(0, 2));
        
        if (randomNum==0){
            balls.push(new Ball());
        } else {
            balls.push(new TennisBall());
        }
        
    }

};

function draw(){
    background(0);

    balls.forEach(ball => {
      ball.render();  
    });
}
    
