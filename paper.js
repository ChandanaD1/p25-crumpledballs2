class Paper {
    constructor (x, y) {
        var options = {
            friction : 0.5,
            isStatic : false,
            restitution : 0.2,
            density : 1.2
        }

        this.body = Bodies.circle(x,y,70,options);
        this.radius = 70;
        this.paper1 = loadImage("paperr.png");

        World.add(world, this.body);
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        image(this.paper1, 300, 320, this.radius);
        pop();
    }
}