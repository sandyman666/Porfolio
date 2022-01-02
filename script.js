
let angles = [];
let r = 0.5;
let Const_frameRate=60;
var speed_slider;


function setup() {
  createCanvas(600, 400);
  frameRate( Const_frameRate )
  speed_slider = createSlider(0, 0.8, 0.3, .01 );
  speed_slider.position(700, 400);
  col = speed_slider.value();
  
  let total = Const_frameRate*50; 
  for (let i = 0; i < total + 1; i++) {
    angles[i] = map(i, 0, total, 0, 2 * TWO_PI*col);
    
  }
  
}

function draw() {
  background(127);
  translate(300, 200);
  
  col = speed_slider.value();
  
  fill(255, 0, 0);
  stroke(255, 0, 0);
  
  beginShape();
  
  for (let i = 0; i < angles.length; i++) {
    let y = map(sin(angles[i]), -1, 1, -200, 200);
    strokeWeight(3);
    let x = map(i, 0, angles.length, -300, 300);
    circle(x, y, r * 2);
    angles[i] -= col;
  }
  endShape();
  
  fill(0, 255, 0);
  stroke(0, 255, 0);
  
  beginShape();
  for (let i = 0; i < angles.length; i++) {
    let y = map(sin(angles[i]-2*PI/3), -1, 1, -200, 200);
    strokeWeight(3);
    let x = map(i, 0, angles.length, -300, 300);
    circle(x, y, r * 2);
    angles[i] -= col;
  }
  endShape();
  
  fill(0, 0, 255);
  stroke(0, 0, 255);
  
  beginShape();
  for (let i = 0; i < angles.length; i++) {
    let y = map(sin(angles[i]-4*PI/3), -1, 1, -200, 200);
    strokeWeight(3);
    let x = map(i, 0, angles.length, -300, 300);
    circle(x, y, r * 2);
    angles[i] -= col;
  }
  endShape();
  
  
}
