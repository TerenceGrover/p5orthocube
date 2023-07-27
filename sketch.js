let angle = 0;
let w = 24;
let arc_tan;
let maxD;

function setup() {
  createCanvas(400, 400, WEBGL);
  arc_tan = atan(1)
  maxD = dist(0, 0, 200, 200)
}

function draw() {
  background('#fafdf3');
  ortho(-400, 400, 400, -400, 0, 1000);
  rotateX(QUARTER_PI);
  rotateY(arc_tan);
  noStroke();
  ambientLight(100, 5)
  pointLight(0, 100, 100, 0, 300, 300)
  pointLight(249, 244, 221, 0, -300, 300)
  fill(255)

  for (let y = 0; y <= height; y += w) {
    for (let x = 0; x <= width; x += w) {
      push();
      let d  = floor(dist(x, y, width/2, height/2))
      let offset = map(d, 0, maxD, -PI, PI)
      let a = angle + offset
      let h = floor(map(sin(a), -1, 1, w-2, 300));
      translate(x - floor(width / 2), 0, y - floor(height/2));
      ambientMaterial(255);
      box(w - 2, h, w - 2)
      offset += d/10
      pop();
    }
  }

  angle -= 0.05;
}
