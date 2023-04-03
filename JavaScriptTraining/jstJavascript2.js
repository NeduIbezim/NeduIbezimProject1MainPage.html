function setup() {
  createCanvas(720, 400);
  background(200, 190, 80);
  drawFace(100, 200, 30); // left face with bigger eyes
  drawFace(300, 200, 10); // right face
}

function drawFace(x, y, eyeSize) {
  push();
  fill(110, 180, 200);
  translate(x, y);
  ellipse(0, 0, 100, 150); //head
  drawEye(-15, -10, eyeSize);
  drawEye(15, -10, eyeSize);
  fill(37, 120, 97);
  rect(-30, 30, 60, 5); //mouth
  pop();
}

function drawEye(x, y, eyeSize) {
  push();
  translate(x, y);
  fill(255); //white
  ellipse(0, 0, eyeSize, eyeSize);
  fill(0); //black
  ellipse(0, 0, eyeSize / 2.0, eyeSize / 2.0);
  pop();
}
