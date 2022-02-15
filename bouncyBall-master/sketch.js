var bg, bgImg;
var hero, heroImg;

function preload(){
    bgImg = loadImage("city.jpeg");
    heroImg = loadImage("hero.png");
}

function setup(){
    createCanvas(1200,900);

     bg = createSprite(1100,350);
     bg.addImage(bgImg);
     bg.scale = 2.4; 
     
     hero = createSprite(50,630);
     hero.addImage(heroImg);
     hero.scale = 0.7;

     bg.velocityX = -3;
}


function draw(){
    background(0);

    if(bg.x< 325){
        bg.x = bg.width/1;
    }
    
   
  
/*if(keyDown("UP_ARROW")){
    hero.y = hero.y - 4;
  
  }
  if(keyDown("DOWN_ARROW")){
    hero.y = hero.y + 4;
  
  }*/

  hero.y = World.mouseY;
    drawSprites();
}
