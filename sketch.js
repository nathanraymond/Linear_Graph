let h, w;

function setup() {
  createCanvas(500, 500);
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

class linear_equation{
  constructor(h,w,m,c){
    this.h = h;
    this.w = w;
    this.m = -m;
    this.c = -c;
  }
  draw_line(){
      var x1 = -(this.w);
      var y1 = (this.m)*(x1) + (this.c);
      var x2 = -x1;
      var y2 = (this.m)*(x2) + (this.c);
      stroke('red');
      noFill();
      line(x1, y1, x2, y2);  
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
  translate(h, w);
  background(250);
  xy_axis = new axis(h, w);
  grid1 = new gird(h, w);
  line1 = new linear_equation(h,w, 1, 0)
  grid1.draw_grid();
  xy_axis.draw_xy();
  line1.draw_line();
}
