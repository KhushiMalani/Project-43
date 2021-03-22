var hrs, mins, sec;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255); 
  translate(200,200);
  rotate(-90);
  hrs= hour();
  console.log(hrs);
  mins= minute();
  console.log(mins);
  sec= second();
  scAngle= map(sec,0,60,0,360);
  push();
  rotate(scAngle);
  stroke(250,0,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  hrAngle= map(hrs%12,0,12,0,360);
  push();
  rotate(hrAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  minAngle= map(mins,0,60,0,360);
  push();
  rotate(minAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  noFill();
  stroke(250,0,0);
  arc(0,0,200,200,0,scAngle);
  stroke("green");
  arc(0,0,250,250,0,minAngle);
  stroke("blue");
  arc(0,0,300,300,0,hrAngle);
    drawSprites();
}