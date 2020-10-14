var car , walls ;
var weight , speed ;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90)
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);

  car.velocityX = speed;

  car.shapeColor = color("white");

  walls = createSprite(1500, 200, 60, height/2);
  walls.shapeColor = color("yellow");
}

function draw() {
  background(0);
  if(walls.x - car.x < (car.width + walls.width)/2){
    car.velociyX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation>180){
    car.shapeColor = color("pink");
  }
  if(deformation<180 && d>100){
  car.shapeColor = color("violet");
  }
  if(deformation<100){
  car.shapeColor = color("pink");
  }
   }
  drawSprites();
}