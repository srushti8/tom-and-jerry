var tom,tomI,jerry,jerryI,backgroundI,backgroundP,tom1,tom2,jerry1;

function preload() {
   tomI = loadAnimation ("images/tomOne.png","images/tomTwo.png","images/tomThree.png","images/tomFour.png");

   tom1 = loadImage ("images/tomOne.png")

   tom2 = loadImage ("images/tomFour.png")

   jerryI = loadAnimation ("images/jerryTwo.png","images/jerryThree.png","images/jerryFour.png");

   jerry1 = loadImage ("images/jerryOne.png")

   backgroundI = loadImage ("images/garden.png");
}

function setup(){
    createCanvas(1000,1000);

    backgroundP =  createSprite(200,400,0,0);
    backgroundP.addImage(backgroundI);
    //backgroundP.scale=2.0;
    
    tom = createSprite(500, 650, 50, 80);
    tom.addImage(tom1);
    tom.scale=0.15;

    jerry = createSprite(150, 600, 80, 30);
    jerry.addImage(jerry1);
    jerry.scale=0.1;

    jerry.debug=true;
}

function draw() {

    background(255);
    
    if (tom.isTouching(jerry)){
        tom.velocityX=0;
    }

    drawSprites();
}


function keyPressed(){

if (keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("cat-running",tomI);
}
}
