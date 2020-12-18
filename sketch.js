let h, w;

function setup() {
  createCanvas(1000, 500);
  h = height/2;
  w = width/2;
}

class axis{
  constructor(h, w){
   this.h = h;
   this.w = w;
  }
  draw_xy() {
    stroke(0);
    strokeWeight(2);
    noFill();
    line(-(this.w), 0, this.w, 0);
    line(0, this.h, 0, -(this.h));
  }
}

function draw() {
  translate(w,h);
  background(204);
  xy_axis = new axis(h, w);
  xy_axis.draw_xy();
}
