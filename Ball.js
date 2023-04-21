class Ball{
    constructor(){
        this.pos = createVector(random(0, width), random(0, height))
    }

    render(){
        stroke(255,0,0);
        noFill();
        ellipse(this.pos.x, this.pos.y, 30);
    }
}

// inherets functions of Ball class
class TennisBall extends Ball{
    constructor(){
        super();
        this.brand = "Nike";
    }

    // overwriting ball render
    render(){
        // adds code of Ball render, anything after adds onto it
        super.render();
        stroke(0,255,0);
        fill(0,255,0);
        rect(this.pos.x, this.pos.y, 10);
    }

    makeBouncy(){
        console.log("I'm bouncy")
    }
}