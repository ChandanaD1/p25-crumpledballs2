class Dustbin {
    constructor(x,y,width,height) {
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.dustbin1 = loadImage("dustbinn.png");

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        image(this.dustbin1, 850, 320, this.width, this.height);
        pop();
    }
}


