var car,wall;
var speed,wight;

function setup() {
  createCanvas(1200,800);
  speed=random(50,90); 
  wight=random(400,1500); 
  car.velocityX = 0;
}


function draw() {
  background(0,0,0);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  car.velocityX = 0;
}
