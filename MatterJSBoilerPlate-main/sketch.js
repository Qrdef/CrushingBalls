
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ground;
var ball;
var left;
var right;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
    ground=new Ground(width/2,670,width,20)
    left=new Ground(550,630,20,100)
	right=new Ground(750,630,20,100)
	ball=new Ball(200,200,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background("blue");
  VForce();
  drawSprites();
  ground.display();
  left.display();
  right.display();
  ball.display();
}
function VForce()
{
	if(keyDown("space")){
    Matter.Body.applyForce(ball.body,{x:0,y:0},{x:85,y:-85})
  }
	
  
	
}


