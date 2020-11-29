const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score=0

function setup() {
  createCanvas(1200,800);
  
 
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,800,1200,20);
  base1 = new Ground(550,700,210,12);
  base2 = new Ground(900,600,154,12);
  ball=new Circle(300,350,20);

  block1= new Block(490,670)
  block2= new Block(520,670)
  block3= new Block(550,670)
  block4= new Block(580,670)
  block5= new Block(610,670)
  block6= new Block(460,670)
  block7= new Block(640,670)

  block8= new Block(490,630)
  block9= new Block(520,630)
  block10= new Block(550,630)
  block11= new Block(580,630)
  block12= new Block(610,630)


  block13= new Block(520,590)
  block14= new Block(550,590)
  block15= new Block(580,590)

  block16= new Block(550,550)

  block17= new Block(840,560)
  block18= new Block(870,560)
  block19= new Block(900,560)
  block20= new Block(930,560)
  block21= new Block(960,560)


  block22= new Block(870,520)
  block23= new Block(900,520)
  block24= new Block(930,520)

  block25= new Block(900,480)

  dod=new HIH(ball.body,{x:250,y:550});
  Engine.run(engine)
}

function draw() {
  background("black");  
  text("SCORE:"+score,1000,250)
  ground.display();
  base1.display()
  base2.display()
  ball.display()
  dod.display();
  fill("skyblue")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise")
  block13.display();
  block14.display();
  block15.display();
  fill("grey")
  block16.display();
  fill("pink")
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("turquoise")
  block22.display();
  block23.display();
  block24.display();
  fill("grey")
  block25.display();

  

  block1.score()
  block2.score()
  block3.score()
  block4.score()
  block5.score()
  block6.score()
  block7.score()
  block8.score()
  block9.score()
  block10.score()
  block11.score()
  block12.score()
  block13.score()
  block14.score()
  block15.score()
  block16.score()
  block17.score()
  block18.score()
  drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 dod.fly();
}
function keyPressed(){
  if(keyCode===32){
    dod.attach(ball.body)
  }
}
