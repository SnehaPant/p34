
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2,windowHeight/1.5);


	engine = Engine.create();
	world = engine.world;
let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio=pixelDensity();
let options = {
	mouse:canvasmouse
}
mConstraint=MouseConstraint.create(engine,options)
World.add(world,mConstraint)
	//Create the Bodies Here.
	bob1=new Pendulum(320,300)
	bob2=new Pendulum(360,300) 
	bob3=new Pendulum(400,300) 
	bob4=new Pendulum(440,300)
	bob5=new Pendulum(480,300)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display(
	
  )
  drawSprites();
 
}



