let h, w;

function setup() {
  createCanvas(550, 550);
  h = height/2;
  w = width/2;
  grad = new InputBox(675, 1, 'Gradient');
  y_int = new InputBox(775, 0, 'Y-Intercept');
  xy_axis = new axis(h, w);
  grid1 = new grid(h, w);
}

class InputBox {
  constructor(x_pos, start_val, title_name){
    this.x_pos = x_pos;
    this.start_val = start_val;
    this.box = createInput(this.start_val);
    this.title_name = title_name;
    this.title = createElement('h2', this.title_name);
  }
  show(){
    this.box.position(this.x_pos, 262);
    this.box.size(27, 20);
    this.title.position(this.x_pos -15, 222);
    this.title.style('font-size', '15px');
  }
  value(){
    return this.box.value()
  }
}


class grid {
  constructor(h, w){
    this.h = h
    this.w = w
  }
  draw_grid(){
     for (var i = -(this.w); i < this.w; i += 25) {
      stroke(190);
      strokeWeight(1);
      line(i, -(this.h), i, this.h);
      line(this.w, i, -(this.w), i);
      // Grid labels
      text(2*i, 2*i + 2, 15);
      text(-2*i, -18, 2*i -2);
      textFont("Big Caslon", 9);
      fill(0);
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
      strokeWeight(1.8);
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
  line1 = new linear_equation(h,w, grad.value(), y_int.value());
  grad.show()
  y_int.show()
  grid1.draw_grid();
  xy_axis.draw_xy();
  line1.draw_line();
}
