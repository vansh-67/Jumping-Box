var ball;
var block1,block2,block3,block4;
var edges;
var music;

function preload(){
  music = loadSound("music.mp3");
}

function setup(){
    createCanvas(800,600);

    ball = createSprite(200,100,50,50);
    ball.velocityX = -8;
    ball.velocityY = 8;
    ball.shapeColor = "violet";

    block1 = createSprite(90,600,170,50);
    block1.shapeColor = "blue";

    block2 = createSprite(280,600,170,50);
    block2.shapeColor = "orange";

    block3 = createSprite(490,600,170,50);
    block3.shapeColor = "red";

    block4 = createSprite(700,600,170,50);
    block4.shapeColor = "green";
}

function draw(){
    background("black");

    edges = createEdgeSprites();

if(ball.isTouching(edges)){
    ball.bounceOff(edges);
 }

 if(ball.isTouching(block1)){
     ball.bounceOff(block1);
     ball.shapeColor = "blue";
     music.play();
 }

 if(ball.isTouching(block2)){
    ball.bounceOff(block2);
    ball.shapeColor = "yellow";
    music.play();
}

if(ball.isTouching(block3)){
    ball.bounceOff(block3);
    ball.shapeColor = "red";
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();
}

if(ball.isTouching(block4)){
    ball.bounceOff(block4);
    ball.shapeColor = "green";
    music.play();
}

    drawSprites();
}