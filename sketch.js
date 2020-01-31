
var r = 0;
var g = 50;
var b= 255;


function setup(){

  createCanvas(1200,400);
}


function draw(){

background(r+100,g+50,b-5);

  if(mouseX>0 && mouseX<200)
  {
  background(r+100,g*5,b-105);
  }

  if(mouseX>200 && mouseX<400)
  {
  background(r+190,g+160,b-145);
  }

  if(mouseX>400 && mouseX<600)
  {
  background(r+150,g+50,b-5);
  }

  if(mouseX>600 && mouseX<800)
  {
  background(r+90,g-30,b-5);
  }

  if(mouseX>800 && mouseX<1000)
  {
  background(r+250,g+50,b-105);
  }

  if(mouseX>1000 && mouseX<1200)
  {
  background(r+10,g+140,b);
  }

  fill(r+150,g+90,b-15);
  ellipseMode(RADIUS);
  ellipse(mouseX,mouseY,20,20);
}