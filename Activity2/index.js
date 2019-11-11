let x = 320;
let y = 300;
let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(640, 600);
  background(255);
}

function draw(){
  // Check for events
  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  } else if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  } else if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if(keyIsDown(32)){
    r = random(255);
    g = random(255);
    b = random(255);
  }

  // Draw the rectangle drawer at current pos
  fill(r, g, b);
  rect(x, y, 60, 60);
}