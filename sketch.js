// Write an algortithm to detect the collision between two objects

// create two rectangles
var fixedRect, movingRect;

function setup() {
  createCanvas(600,600);

  fixedRect = createSprite(300, 300, 50, 50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(200,200, 60,60);
  movingRect.shapeColor = "green"
}
// Hello Milton!

function draw() {
  background(0);  

  // make the recatangle move with the mouse
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  // the distance between fixed and moving Rect in the x axis
  var distanceBetweenRectLeft = fixedRect.x - movingRect.x;
  var distanceBetweenRectRight = movingRect.x - fixedRect.x;
  //  max distance at which the collision can happen in the x axis
  var maxDistanceBetweenX = (fixedRect.width + movingRect.width)/2;
  var maxDistanceBetweenY=(fixedRect.height+movingRect.height)/2
  var distanceBetweenRectUp=(fixedRect.y-movingRect.y)
  var distanceBetweenRectDown=(movingRect.y-fixedRect.y)
  if(distanceBetweenRectLeft < maxDistanceBetweenX && distanceBetweenRectRight<maxDistanceBetweenX
    && distanceBetweenRectUp < maxDistanceBetweenY && distanceBetweenRectDown < maxDistanceBetweenY){
    fixedRect.shapeColor= "red";
    movingRect.shapeColor = "red"
  }else{
    fixedRect.shapeColor= "green";
    movingRect.shapeColor = "green"
  }

  // fixedRect.x = 300
  // movingRect--- Left side === movingRect.x < 300
  // movingRect---Right side === movingRect.x > 300


  // fixedRect.x - movingRect.x  - negattive
//max Distance - 55
  //300 - 200 = 100
  //300-400 = -100
  drawSprites();
}