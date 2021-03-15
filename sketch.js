
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;



function setup() {
	createCanvas(800, 400);
  

	engine = Engine.create();
	world = engine.world;


  paper = new Paper(100, 100,10);

  ground = new Ground(400,380,800,10);
  

  leftSide= new Dustbin(550, 335, 20, 100);
  bottom= new Dustbin(610, 375, 800, 20);
  rightSide= new Dustbin(670, 335, 20, 100);
  
  Engine.run(engine);

}


function draw() {
 

  background(0);

  Engine.update(engine);

  paper.display();
  ground.display();
 

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprite();

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{ x: 15,y: -15 })
  }
}