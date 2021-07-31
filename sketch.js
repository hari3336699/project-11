var boy,boyImg;
var path,pathImg;

function preload(){
  //pre-load images
  boyImg=loadAnimation("Runner-1.png","Runner-2.png");

  pathImg=loadImage("path.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here

 

  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=4;
  path.Scale=1.2;


 boy=createSprite(70,50,10,10);
  boy.addAnimation("run",boyImg)
  boy.Scale=0.5;



 


}

function draw() {
  background(0);



  if(path.y > 400 ){
    path.y = height/2;
  }

drawSprites()
}
