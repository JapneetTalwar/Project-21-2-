
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball ;
let ground,lside,rside;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	 let ball_options = {

		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density:0.2

	 }

	//Create the Bodies Here.
	ball = Bodies.circle(50,100,5,ball_options)
	World.add(world,ball)

	

	ground = new Ground(width/2,670,width,20);
	lside = new Ground(1100,600,20,120);
	rside = new Ground(1400,600,20,120);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  ellipse(ball.position.x,ball.position.y,50,50);

  ground.display()
  lside.display()
  rside.display()
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.body.applyForce(ball, ball.position,{x:50, y:-50})
	}
}
