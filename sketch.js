

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  

  
//  red_balloon = createSprite(50, 180, 1, 1);
// red_balloon.addImage(red_balloonImage)
//   red_balloon.scale = 0.1
  
  //create line of red balloons using for loop
/*for(var i=60;i<390;i=i+60){
  red_balloon = createSprite(50, i, 1, 1);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1
}
 */
  

//create line of green balloons using for loop
/*for(var i=110;i<390;i=i+60){
  green_balloon = createSprite(100, i, 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1;
}*/

  
//create line of blue balloons using for loop
/*for(var i=130;i<350;i=i+60){  
  blue_balloon = createSprite(140, i, 10, 10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale=0.1;
}*/
  
  //create line of purple balloons using for loop
/*for(var i=180;i<250;i=i+60){
  pink_balloon = createSprite(180, i, 10, 10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale = 1.2;
}*/
 

 
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  var select_balloon = Math.round(random(1,4));
 console.log(select_balloon);
  if(World.frameCount % 80 == 0) {
    if(select_balloon == 1) {
      redBalloon();
    }
    else if(select_balloon == 2) {
      greenBalloon();
    }
    else if(select_balloon == 3) {
     blueBalloon();
   }
   else if(select_balloon == 4) {
     pinkBalloon();
   }
  }
  
  drawSprites();
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}
function redBalloon() {
  var red_balloon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red_balloon.addImage(red_balloonImage);
  red_balloon.velocityX = 3;
  red_balloon.lifetime = 150;
  red_balloon.scale = 0.1;
  
}
function greenBalloon() {
  var green_balloon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.velocityX = 3;
  green_balloon.lifetime = 150;
  green_balloon.scale = 0.1;
  
}
function blueBalloon() {
  var blue_balloon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.velocityX = 3;
  blue_balloon.lifetime = 150;
  blue_balloon.scale = 0.1;
}
function pinkBalloon() {
  var pink_balloon = createSprite(0, Math.round(random(20, 370)), 50, 50);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.velocityX = 3;
  pink_balloon.lifetime = 150;
  pink_balloon.scale = 0.1;
}