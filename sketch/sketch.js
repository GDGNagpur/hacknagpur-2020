export default function sketch(p) {
  let lines = [];
  let step = 20;

  p.setup = function () {
    p.createCanvas(p.windowWidth + 200, p.windowHeight);
    p.background('#272121');
    p.stroke('#02fe89');
    p.strokeWeight(0.3);

    for (let i = step; i < p.height; i += step) {
      let line = [];
      for (let j = 0; j <= p.width; j += step) {
        let p = { x: j, y: i };
        line.push(p);
      }
      lines.push(line);
    }
  };

  let noiseScale = 0.01;
  let speed = 0;

  p.draw = function () {
    p.background('#272121');
    p.fill('#272121');
    for (let i = 0; i < lines.length; i++) {
      p.beginShape();
      p.vertex(-p.width, lines[i][lines[i].length - 1].x);
      for (let j = 0; j < lines[i].length; j++) {
        let x = lines[i][j].x;
        let y = lines[i][j].y;
        let off =
          p.noise(x * noiseScale + speed, y * noiseScale + speed) * step * 5;
        p.vertex(x, y + off);
        speed += p.random(i + j) * 0.00000005;
      }
      p.vertex(p.width, lines[i][lines[i].length - 1].x);
      p.endShape();
    }
    if (speed == 0.0001) {
      speed = 0;
    }
    //p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth + 200, p.windowHeight);
  };
}
