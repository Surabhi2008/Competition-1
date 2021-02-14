const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ball,ground,log1,log2,log3,log4,stone1,stone2,stone3,backgroundIMG,woodIMG,star1,star2,star3,star4,star5,star6,starIMG,start,roof
var gameState="play"
var gameState="start"
var engine, world;
var ball
var ground

function preload(){
  background2IMG=loadImage("background2.jpg")
  background1IMG=loadImage("background.jpg")
  startIMG=loadImage("start.png")
 
}

function setup() {
  createCanvas(1600,700);
  rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;
   
   
    ball=new Ball(200,450,40);

    
    ground=new Ground(width/2,670,width,20);
    roof=new Ground(width/2,10,width,20)
    log1=new Logs(500,300,width/7,20)
    log2=new Logs(700,500,width/7,20)
    log3=new Logs(900,90,width/7,20)
    log4=new Logs(1300,400,width/2,20)
    star1=new Star(700,400)
    star2=new Star(500,100)
    star3=new Star(1000,250)
    star4=new Star(1150,250)
    star5=new Star(1500,370)
    star6=new Star(900,60)
  

  
 
   
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1200,
      height: 700,
      wireframes: false
    }
    });
  Engine.run(engine);
 
}

function draw() {
 
  background(background1IMG);
  Engine.update(engine);

  if(gameState==="start"){
    background(background2IMG)
     start=createSprite(500,300,20,20)
     start.addImage(startIMG)
     start.display()
    
  }

 if(gameState==="play"){
  ball.display()
  ground.display()
  roof.display()
  log1.display()
  log2.display()
  log3.display()
  log4.display()
  star1.display()
  star2.display()
  star3.display()
  star4.display()
  star5.display()
  star6.display()
 
  keyPressed1()
  keyPressed2()
  keyPressed3()
 
 }

 if(mousePressedOver(start)){
  
  gameState="play"
 
 }
  
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
	
    Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-100});
  
  }
}
o

function keyPressed1() {
  if (keyCode === LEFT_ARROW) {

    Matter.Body.applyForce(ball.body,ball.body.position,{x:-1,y:0});
  
  }
}

function keyPressed2() {
  if (keyCode === RIGHT_ARROW) {

    Matter.Body.applyForce(ball.body,ball.body.position,{x:1,y:0});
  
  }
}

 function keyPressed3(){
  if (keyCode === "space") {

    Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:0});
  
  }
}



