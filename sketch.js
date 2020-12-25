var goku,gokuImage;
var space,spaceImage;
var rock,rockImage,rocksGroup;
gameState="PLAY";
function preload(){
gokuImage=loadImage("goku.jpg");
spaceImage=loadImage("bg2.png.png");
rockImage=loadImage("stone.png.png");
  rocksGroup=new Group();
}

function setup() {
 createCanvas(600,600);
  
  space=createSprite(300,100);
  space.addImage("space",spaceImage);
  space.velocityX=1;
  space.scale=2;
  
  goku=createSprite(100,200,20,20);
  goku.addImage("goku",gokuImage);
  goku.scale=0.2;
  goku.velocityX=0;
}

function draw() {
 background("white");
  
  if(gameState==="PLAY"){
  if(space.x>400){
    space.x=300;
  }
  
  
  if(keyDown("UP_ARROW")){
    goku.y=goku.y-3;
  }
  if(keyDown("DOWN_ARROW")){
    goku.y=goku.y+3;
  }
  }
  
  if(rocksGroup.isTouching(goku)){
    gameState="END";
  }
    
      
     
  if(gameState==="END"){
    goku.destroy();
    rocksGroup.destroyEach();
    space.destroy();
    
    
    fill("yellow");
    textSize(30);
    text("GAMEOVER",230,250);
  }
  
   spawnRocks();
  drawSprites();
}
function spawnRocks(){
   if(frameCount%150===0){
     rock=createSprite(500,50);
     rock.addImage("rock",rockImage);
     rock.y=Math.round(random(20,400));
     rock.velocityX=-3;
     rock.lifetime=800; 
     rock.scale=0.1;
     rocksGroup.add(rock);
     
   }
}