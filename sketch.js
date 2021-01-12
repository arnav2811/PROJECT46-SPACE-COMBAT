//creating variables for spaceship
var spaceShuttle, spaceShuttleImg;

// creating variables for obstacles
var obstacle1, obtscale2, obstacle3, obstacle4, obstacle5;
var obstacle1img, obstacle2img, obstacle3img, obstacle4img, obstacle5img;
var obstacle1Group, obstacle2Group, obstacle3Group, obstacle4Group, obstacle5Group

// creating avriables for alliens and boss
var alien1img, alien2img; 
var boss, bossImg;

// creating variables for attacks and boosters
var alienattackImg, attackImg, bossImg, bossAttackImg, goldenAttackImg;
var bubbleImg, fuelImg, heartImg, shieldImg
var bubbleF, fuel, bubbleH, heart, bubbleS, shield
var bubbleGroupF, fuelGroup, bubbleGroupH, heartGroup, bubbleGroupS, sheildGroup
var spaceShuttleShield, spaceShuttleShieldImg

// other elements of the game
var life = 5, fuelCount = 10
var time= 0, score = 0
var gameState = "A"
var bg, bg1, bg2, bg3, bg4, bg5
var button

function preload(){
//loading images for the backGround
bg1 = loadImage("background/bg1.jpg");
bg2 = loadImage("background/bg2.jpg");
bg3 = loadImage("background/bg3.jpg");
bg4 = loadImage("background/bg4.jpg");
bg5 = loadImage("background/bg5.jpg");

// loading images for the background and the button
spaceShuttleImg = loadImage("character/spaceShuttle.png");
buttonImg = loadImage("character/start.png")

//loading images for obstacles
obstacle1img = loadImage("character/obstacle1.png")
obstacle2img = loadImage("character/obstacle2.png")
obstacle3img = loadImage("character/obstacle3.png")
obstacle4img = loadImage("character/obstacle4.png")
obstacle5img = loadImage("character/obstacle5.png")

// loading images for aliens and boss
alien1img = loadImage("character/alien1.png")
alien2img = loadImage("character/alien2.png")
bossImg = loadImage("character/boss.png")

// loading attck images
attackImg = loadImage("character/attack.png")
alienattackImg = loadImage("character/alienattack.png")
bossAttackImg = loadImage("character/bossAttack.png")
goldenAttackImg = loadImage("character/goldenattack.png")

// loading images for the boosters 
bubbleImg = loadImage("booster/bubble.png")
fuelImg = loadImage("booster/fuel.png")
heartImg = loadImage("booster/heart.png")
shieldImg = loadImage("booster/shield.png")
spaceShuttleShieldImg = loadImage("booster/spaceShuttleShield.png")
}

function setup() {
  // creating canvas and its edges
  createCanvas(displayWidth, displayHeight);
  edges = createEdgeSprites()
  
  //creating space shuttle
  spaceShuttle = createSprite(displayWidth/2, displayHeight/2 + 200, 100, 100);
  spaceShuttle.addImage(spaceShuttleImg);
  spaceShuttle.scale = 0.3;
  spaceShuttle.visible = false;
  
  // craeting groups for the obstacles
   obstacle1Group = createGroup();
   obstacle2Group = createGroup();
   obstacle3Group = createGroup();
   obstacle4Group = createGroup();
   obstacle5Group = createGroup();

  // creating groups for bubble and boosters
  bubbleGroupF = createGroup();
  fuelGroup    = createGroup();
  bubbleGroupH = createGroup(); 
  heartGroup   = createGroup(); 
  bubbleGroupS = createGroup(); 
  sheildGroup  = createGroup();
 // assigning initial backGround
  bg0 = bg5;
  
 // creating the button
  button = createSprite(displayWidth/2, displayHeight/2, 200, 200);
  button.addImage(buttonImg);
  button.visible = false;



}

function draw() {
  background(bg0);  
 
if(gameState === "A"){
bg0 = bg1
textSize(25)
stroke("black")
fill("white")
text("WELCOME TO SPACE COMBAT", displayWidth/2 - 150, 50)
textSize(20)
text("YOUR PLANET IS PRONE TO ALIEN ATTACK WHICH CAN ERADICTE ENTIRE HUMAN CIVILIZATION AND THE ASTRONOMICAL RESEARCH", 10, 85)
text("HAS CHOSEN YOU FOR THIS MISSION TO DEFND YOUR PLANET AND SAVE THE LIFE OF YOUR FELLOW CITIZENS.", 10, 120)
text("YOU HAVE TO ATTACK THE ALIEN AND THIER BOSS SHIP WHICH IS NEAR THE ASTERIOD BELT.", 10, 160)
text("NOW THE DESTINY OF THE PLANET AND THE CIVILIZATION DEPENDS UPON YOU.", 10, 200)
text("ALL THE BEST FOR THE MISSION", 10, 240)
textSize(15)
text("(PRESS RIGHT KEY)", 10, 280)
console.log(1)
if(keyDown(RIGHT_ARROW)){
  gameState = "B"
}
  }

if(gameState === "B"){
  console.log(2)
  textSize(25)
  stroke("black")
  fill("white")
  text("RULES OF THE GAME",displayWidth/2 - 150, 50 )
  textSize(20)
  text("YOU CAN YOU USE THE FOUR ARROW KEYS FOR NAVIGATING THE SPACE SHIP", 10, 90)
  text("REMEMBER YOU CAN NOT CROSS MORE THAN HALF THE SCREEN", 10, 130)
  text("THE GAME WILL BEGIN WITH 5 LIVES AND 10 FUEL.", 10, 170)
  text("ONE LIFE WILL BE DECUTED IF YOU ANY OF METEROIDS OR FIRE BALL HIT YOU.", 10, 210)
  text("IF THE ALIEN'S ATTACK HITS YOU THEN ALSO ONE LIFE WILL BE DEDUCTED.", 10, 250)
  text("THE FUEL COUNT WILL HELP YOU TO GENERATE THE ATTACK AS THE FUEL WILL BE NEEDED", 10, 290)
  text("TO ATTACK EITHER THE ENEMY OR THE OBSTACLES.", 10, 330)
  text("TO GENERATE THE ATTACK PRESS SPACE, ONE ATTACK WILL REDUCE THE FUEL COUNT BY 1", 10, 370)
  text("TO GENERATE THE GOLDEN ATTACK WHICH IS TWICE POWERFUL THAN THE NORMAL ATTACK", 10, 410)
  text("PRESS G, REMEMBER IT WILL REDUCE THE FUEL COUNT BY 2", 10, 450)
  text("BOOSTERS ARE PREESENT TO AID YOUR GAMING EXPERIENCE", 10, 490)
  text("YOUR MAIN AIM IS TO PASS ALL ALL THE STAGES AND DESTROY THE BOSS SHIP IN THE", 10, 530 )
  text("FINAL STAGE I.E. THE 3RD STAGE.", 10, 570)
  textSize(15)
  text("PRESS SPACE TO CONTINUE", 10, 590)
  if(keyDown("space")){
    gameState = 0
  }
}

if(gameState === 0){
  button.visible= true;
  textSize(25)
  stroke("black")
  fill("white")
  text("NOW YOU ARE ALL READY FOR THE COMBAT!", displayWidth/2 - 200, displayHeight/2 - 200)
  if(mousePressedOver(button)){
    gameState = 1;
    button.destroy();
    
  }
  }

if(gameState === 1){
   bg0 = bg2
   ObstacleOne()
   ObstacleTwo()
  
  }

 if(gameState === 2){
  bg0 = bg3
  ObstacleOne()
  ObstacleTwo()
  ObstacleThree()
 }
 
  
 drawSprites();
 if(gameState ===1 || gameState ===2 || gameState ===3){
  time += Math.round(frameRate())
  spaceShuttle.visible = true;
    //adding controls to the space shuttle and defining the moveable area
    if(keyDown(UP_ARROW)&&spaceShuttle.y>displayHeight/2){
      spaceShuttle.y -= 10 
    }
    if(keyDown(DOWN_ARROW)&&spaceShuttle.y<displayHeight){
      spaceShuttle.y +=10
    }
    if(keyDown(RIGHT_ARROW)&&spaceShuttle.x< displayWidth){
      spaceShuttle.x += 10
    }
    if(keyDown(LEFT_ARROW)&&spaceShuttle.x> (displayWidth - displayWidth)){
      spaceShuttle.x -= 10; 
    }
    // calling the functions of the boosters
    Heart()
    Shield()
    Fuel()
    // one life will be incremented if heart booster is touched
    if(spaceShuttle.isTouching(heartGroup)){
      heartGroup.destroyEach()
      bubbleGroupH.destroyEach()
      life +=1
    }
    // fuelCount will be incremented when fuel booster is touched
    if(spaceShuttle.isTouching(fuelGroup)){
      fuelGroup.destroyEach()
      bubbleGroupF.destroyEach(
        fuelCount +=1
      )
    }
   // a shield will appear around the spaceShuttle for a limited period when shield is touched
  if(spaceShuttle.isTouching(sheildGroup)){
    sheildGroup.destroyEach()
    bubbleGroupS.destroyEach()
    SpaceShuttleShield()
  }
   
  //displaying time, score, life and fuel when the game is started
  textSize(25)
  stroke(5)
  fill("white")
  text("TIME: "+ time, displayWidth/2 - 600, 60)
  text("SCORE: "+score, displayWidth/2 - 600, 90)
  text("LIFE: "+ life, displayWidth/2 - 600, 120)
  text("FUEL: "+fuelCount, displayWidth/2 - 600, 150)
 }
}

function alien(){
if(alienCounter === 4){
  alienArray.push(createSprite(100, 0, 100, 100))
  alienArray
}
}
// creating function for the shield of space shuttle
function SpaceShuttleShield(){
  spaceShuttleShield= createSprite(spaceShuttle.x, spaceShuttle.y) 
  spaceShuttleShield.addImage(spaceShuttleShieldImg)
  spaceShuttleShield.scale = 0.45
  spaceShuttleShield.lifetime= 500
}

// creating function for shield booster surrounded by a bubble
function Shield(){
  var randS = Math.round(random(displayWidth/2 - 250, displayWidth/2 +250))
  if(frameCount%1000===0){
    
    bubbleS = createSprite(randS, - 100);
    bubbleS.addImage(bubbleImg);
    bubbleS.scale = 0.3;
    bubbleS.velocityY = 7.5;
    bubbleS.lifetime = 700;
    bubbleGroupS.add(bubbleS);

    shield = createSprite(randS,  - 100);
    shield.addImage(shieldImg);
    shield.scale = 0.25;
    shield.velocityY = 7.5;
    shield.lifetime = 700;
    sheildGroup.add(shield);
    
   
  }
}
// creating function for heart booster surrounded by a bubble
function Heart(){
  var randS = Math.round(random(displayWidth/2 - 250, displayWidth/2 +250))
  if(frameCount%1500===0){
    
    bubbleH = createSprite(randS, - 100);
    bubbleH.addImage(bubbleImg);
    bubbleH.scale = 0.3;
    bubbleH.velocityY = 7.5;
    bubbleH.lifetime = 700;
    bubbleGroupH.add(bubbleH);
    
    heart = createSprite(randS,  - 100);
    heart.addImage(heartImg);
    heart.scale = 0.45;
    heart.velocityY = 7.5;
    heart.lifetime = 700;
    heartGroup.add(heart);
    
    
  }
}
// creating function for fuel booster surrounded by a bubble
function Fuel(){
  var randS = Math.round(random(displayWidth/2 - 250, displayWidth/2 +250))
  if(frameCount%400===0){
    
    bubbleF = createSprite(randS, - 100);
    bubbleF.addImage(bubbleImg);
    bubbleF.scale = 0.3;
    bubbleF.velocityY = 7.5;
    bubbleF.lifetime = 700;
    bubbleGroupF.add(bubbleF);
    
    fuel = createSprite(randS,  - 100);
    fuel.addImage(fuelImg);
    fuel.scale = 0.1;
    fuel.velocityY = 7.5;
    fuel.lifetime = 700;
    fuelGroup.add(fuel);
    
    
  }
}
// creating functions for the obstacles ctaegory 1
function ObstacleOne(){
  if(frameCount%140===0){
    obstacle1 = createSprite(displayWidth +100 ,Math.round(random(displayHeight/2, displayHeight-500)))
    obstacle1.addImage(obstacle1img);
    obstacle1.velocityX = -10
    obstacle1.scale= 0.25;
    obstacle1.lifetime = 1250;
    obstacle1Group.add(obstacle1);
  }
}

// creating functions for the obstacles ctaegory 2
function ObstacleTwo(){
  if(frameCount%160===0){
    obstacle2 = createSprite(displayWidth+100 ,Math.round(random(displayHeight/2, displayHeight-400)))
    obstacle2.addImage(obstacle2img);
    obstacle2.velocityX = -10
    obstacle2.scale= 0.25;
    obstacle2.lifetime = 1250;
    obstacle2Group.add(obstacle2);
  }
}

// creating functions for the obstacles ctaegory 3
function ObstacleThree(){
  if(frameCount%180===0){
    obstacle3 = createSprite(displayWidth+100 ,Math.round(random(displayHeight/2, displayHeight- 300)))
    obstacle3.addImage(obstacle3img);
    obstacle3.velocityX = -10
    obstacle3.scale= 0.25;
    obstacle3.lifetime = 1250;
    obstacle3Group.add(obstacle3);
  }
}

// creating functions for the obstacles ctaegory 4
