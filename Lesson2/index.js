// Variables that needs to persist state here.
let x = 320;
let y = 300;
let r = 0;
let g = 0;
let b = 0;
let drawingArr = [];

// This functions runs once at the start of the program
function setup() {
  createCanvas(640, 600);
  background(255);
  noStroke();
}

// This function loops; As in it will be called continuously throughout the application
function draw() {
  // Clear the screen
  background(255);

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

  // If I press 's', switch colours and remember
  if (keyIsDown(83)) {
    r = random(255);
    g = random(255);
    b = random(255);
  }

  // If I press space, then draw remember
  if (keyIsDown(32)) {
    drawingArr.push({
      x,
      y,
      r,
      g,
      b
    });
  }

  // Draw all previous rectangles
  for (let i = 0; i < drawingArr.length; i++) {
    fill(drawingArr[i].r, drawingArr[i].g, drawingArr[i].b);
    rect(drawingArr[i].x, drawingArr[i].y, 60, 60);
  }

  // Draw the rectangle drawer at current pos
  fill(r, g, b);
  rect(x, y, 60, 60);
}
