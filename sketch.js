
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var BananaGroup, obstaclesGroup;
var score;
var ground,groundImg;
var jungle,jungleImg;


function preload()
{
    monkey_running =                   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("obstacle.png");
    jungleImg = loadImage("hhh.jpg");

    groundImg = loadImage("grass.png");
  }



function setup() 
{
 createCanvas(600,400);
  
  
  //jungle = createSprite(300,200,1200,100);
  //jungle.addImage(jungleImg);
  //jungle.scale= 1.34;
  
  monkey = createSprite(100,317,600,40);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale = 0.14;
  
  ground = createSprite(600,360,1200,10);
  ground.x = ground.width/2;
  //ground.addImage(groundImg);
  //ground.scale = 0.3;
  ground.shapeColor = "green";
           
  
  //SurvivalTime = 0;
  
  BananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
  
  
  
  
  
  

  
}


function draw() 
{
  background(jungleImg);
  
  if (ground.x < 300)
    {
      ground.x = ground.width/2;
    }
  
   ground.velocityX = -8;
  
   monkey.collide(ground);
  
    
  if(keyDown("space") && monkey.y >= 312)
    {
      monkey.velocityY = -9;
    }
  
  monkey.velocityY = monkey.velocityY + 0.3;
  
  spawnBananas();
  spawnObstacles();
  
  
  
  var SurvivalTime = 0;
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime = Math.ceil(frameCount/frameRate());
  text("SURVIVAL TIME = "+ SurvivalTime,375,50);
  
  //console.log(ground.x);
  
  /*SurvivalTime.depth = jungle.depth;
  SurvivalTime.depth = SurvivalTime.depth + 1;*/
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();

  
}

function spawnBananas()

{
  
  if(frameCount % 80 === 0)
    {
      banana = createSprite(600,200,20,20);
      banana.y = random(120,200);
      //banana.velocityX = -6;
      banana.addImage(bananaImage);
      banana.scale=0.12;
      banana.lifetime = 150;
      banana.velocityX = Math.round(random(-7,-13));
      BananaGroup.add(banana);
      
      /*var rn = Math.round(random(1,2,3,4));
  switch(rn)
    {
      case 1 : banana.velocityX = -10;
        break;
        case 2 : banana.velocityX = -7;
        break;
        case 3 : banana.velocityX = -8;
        break;
        case 4 : banana.velocityX = -9;
        break;
        default : break;*/
      
      
    }
}
  
function spawnObstacles()
  {
    if(frameCount % 300 === 0)
      {
        obstacle = createSprite(600,327,40,40);
        obstacle.velocityX = Math.round(random(-7,-12));
        //console.log(obstacle.x);
        obstacle.addImage(obstacleImage);
        obstacle.scale = 0.16;
        obstacle.lifetime = 150;
        obstaclesGroup.add(obstacle);
   }
    
  }








