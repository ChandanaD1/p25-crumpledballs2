const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1, bin2, bin3;
var paper1;
var ground1;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,650,1200,20);

	bin1 = new Dustbin(200,200);

	paper2 = new Paper(400, 320);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(60);

	Engine.update(engine);

	ground1.display();
    
    bin1.display();

    paper2.display();
  
	drawSprites();
 
}

function keyPressed () {
    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:150, y:-200})
    }
}
