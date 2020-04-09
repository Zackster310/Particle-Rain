const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rings = [];
var balls = [];

function setup() {
  createCanvas(1500,700);

  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(0);
  Engine.update(engine);  

  RingRain(); 
  EBallRain(); 

  for (var a = 0; a < rings.length; a++) {
    rings[a].display();
  }

  for (var b = 0; b < balls.length; b++) {
    balls[b].display();
  }

  drawSprites();
}

function RingRain(){
  rings.push(new Ring());
}

function EBallRain(){
  balls.push(new EBall());
}