
var trex ,trex_running;
var edges;
var ground;
var groundImage;
var invisibleGround;
function preload(){
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
}


function setup(){
    createCanvas(600,200)
    
    //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;
  //create a ground sprite
  ground = createSprite(200,180,600,20);
  ground.addImage(groundImage);
  ground.x = ground.width/2;
  //create a edges sprite
  edges = createEdgeSprites();

  invisibleGround = createSprite(200,190,600,10);
invisibleGround.visible = false;
}

function draw(){
    background("white")
    
    console.log(trex.y);

    // to move the ground
    ground.velocityX = -2;

    if(ground.x<0){
  ground.x = ground.width/2
    }
  // to jump the trex
    if(keyDown("space") && trex.y>= 160){
  trex.velocityY = -10;
    }
  //gravity
    trex.velocityY = trex.velocityY+0.5;
    trex.collide(invisibleGround);
    drawSprites();

}
