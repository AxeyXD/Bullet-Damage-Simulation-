var bullet, wall, speed, weight, thickness;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 85, 50, 50);
  wall= createSprite(1500,50,60,height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
  bullet.shapeColor="blue";
 


}

function draw() {
  background(255,255,255); 
 if (collided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if (damage>10){
    wall.shapeColor="red"
  
  }   
  if (damage<10){
    wall.shapeColor="green"
  }

}
  drawSprites();
}

function collided(bullet,wall){
  rightedge=bullet.x+bullet.width
  leftedge=wall.x
  if (rightedge>=leftedge){
    return true
    }
  return false 
}