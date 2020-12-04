function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
  
}

function draw() {
  background("black");
  translate(200,200)
  rotate(270);
  
  let hr = hour();
let mn = minute();
let sc = second();
  
  
  if(mn < 10)
    mn = "0"+mn
  
  strokeWeight(8);
  noFill();
  stroke(255,100,150);
  strokeWeight(9);
  
  let sec = map(sc,0,60,0,360);
  arc(0,0,300,300,0,sec);
  
  stroke(150,100,255);
  let min = map(mn,0,60,0,360);
  arc(0,0,280,280,0,min);
  
  stroke(150,255,100);
  let h = map(hr % 12,0,12,0,360);
 
  
  push();
  rotate(sec);
  stroke(255,100,150);
  line(0,0,100,0);
  pop();
  
    push();
  rotate(min);
  stroke(150,100,255);
  line(0,0,75,0);
  pop();
  
    push();
  rotate(h);
  stroke(150,255,100);
  line(0,0,50,0);
  pop();
  
   arc(0,0,260,260,0,h);
  
  stroke(255);
  strokeWeight(10)
  point(0,0);
  
  rotate(90)
  strokeWeight(1);
  


   textSize(100);
   text(hr+":"+mn+":"+sc, 175,20);

  textSize(20)
  text("Made By: Shivansh Agrawal",175,-100)
}



