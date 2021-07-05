const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  ground =  new Log(600,height-8,1200,15);

  log1 = new Log(600,420,280,7);
  log2 = new Log(940,285,190,7);

  rect1 = new Blue(495,380,50,65);
  rect2 = new Blue(547,380,50,65);
  rect3 = new Blue(599,380,50,65);
  rect4 = new Blue(651,380,50,65);
  rect5 = new Blue(703,380,50,65);

  rect6 = new Brown(880,255,50,50);
  rect7 = new Brown(932,255,50,50);
  rect8 = new Brown(984,255,50,50);

  rect9 = new Yellow(520,305,50,65);
  rect10 = new Yellow(572,305,50,65);
  rect11 = new Yellow(624,305,50,65);
  rect12 = new Yellow(676,305,50,65);

  rect13 = new Black(905,195,50,50);
  rect14 = new Black(957,195,50,50);

  rect15 = new Red(545,230,50,65);
  rect16 = new Red(597,230,50,65);
  rect17 = new Red(649,230,50,65);

  rect18 = new Blue(930,145,50,50);

  rect19 = new Brown(570,155,50,65);
  rect20 = new Brown(622,155,50,65);

  rect21 = new Black(595,80,50,65);

  hexagon = new Hexagon(145,410,50,50);

  chain = new Chain(hexagon.body,{x:145,y:410});

  score = 0;

  Engine.run(engine);
}

function draw() { 

  ground.display(); 

  log1.display();
  log2.display();

  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();

  rect6.display();
  rect7.display();
  rect8.display();

  rect9.display();
  rect10.display();
  rect11.display();
  rect12.display();

  rect13.display();
  rect14.display();

  rect15.display();
  rect16.display();
  rect17.display();

  rect18.display();

  rect19.display();
  rect20.display();

  rect21.display();

  hexagon.display();

  chain.display();

  rect1.score();
  rect2.score();
  rect3.score();
  rect4.score();

  rect5.score();
  rect6.score();
  rect7.score();
  rect8.score();

  rect9.score();
  rect10.score();
  rect11.score();
  rect12.score();

  rect13.score();
  rect14.score();
  rect15.score();
  rect16.score();

  rect17.score();
  rect17.score();
  rect18.score();
  rect19.score();
  
  rect19.score();
  rect20.score();
  rect21.score();

  drawSprites();
  textSize(20);
  fill("yellow");
  text("Drag the hexagonal stone and release it, to launch it towards the block",300,50);
  textSize(15);
  text("Score : "+score,1110,50);

  getBackground();
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}
function  mouseReleased(){
  chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    chain.attach(hexagon.body);
  }
}
async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJson = await response.json();
  var datetime = responseJson.datetime;
  var hour = datetime.slice(11,13);

  if(hour <= 20 && hour >= 0){
    background(43, 215, 255);
  }
  else{
    background(43, 215, 255);
  }
}