function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  for (var i = 0; i < 100; i++) {
    stars.push( new Star(random(0, windowWidth), random(0, windowHeight)) );
  }
}

var stars = [];
function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background(30, 28, 44);

  for (var i = 0; i < stars.length; i++) {
    stars[i].showAndTell();
  }
}

class Star {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(2, 10);
    this.growValue = 0.2;
    this.sizeMultipler = 1.01;
    this.minSize = this.size * 0.5;
    this.maxSize = this.size * 1.5;
  }

  show() {
    stroke(255, 249, 203);
    rectMode(CENTER);
    rect(this.x, this.y, 0, this.size);
    rect(this.x, this.y,this.size/2, 0);
  }

  tell() {
    this.size = constrain(this.size, this.minSize, this.maxSize);
    if (this.size >= this.maxSize) {
      this.growValue *= -1;
    } else if (this.size <= this.minSize) {
      this.growValue *= -1;
    }
    this.size += this.growValue;
    this.size *= 1.01;
  }

  showAndTell() {
    this.show();
    this.tell();
  }

}
