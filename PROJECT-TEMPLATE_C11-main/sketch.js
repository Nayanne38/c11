var barco,barcoIMG;
var mar,marIMG;

function preload(){

  barcoIMG=loadAnimation("ship-1.png","ship-2.png");
  marIMG=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  mar=createSprite(400,200)
  mar.addImage(marIMG)

  mar.velocityX=-5
  mar.scale=0.5


  barco=createSprite(130,200,30,30);
  barco.addAnimation("movimento",marIMG);

}

function draw() {
  background("blue");
    drawSprites();
mar.velocityX=-5
 
}
