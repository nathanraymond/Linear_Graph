let h, w;

function setup() {
  createCanvas(1000, 500);
  h = height/2;
  w = width/2;
}

class gird {
  constructor(h, w){
    this.h = h
    this.w = w
  }
  draw_grid(){
     for (var i = -(this.w); i < this.w; i += 10) {
      stroke(190);
      strokeWeight(1);
      line(i, -(this.h), i, this.h);
      line(this.w, i, -(this.w), i);
      }
  }
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
  background(250);
  xy_axis = new axis(h, w);
  grid1 = new gird(height, width);
  grid1.draw_grid();
  xy_axis.draw_xy();
}
