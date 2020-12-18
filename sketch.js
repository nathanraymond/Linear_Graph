
function setup() {
	createCanvas(1000, 500);
}

class axis{
  constructor(height, width){
   this.height = height;
   this.width = width;
  }
  draw_xy() {
    stroke(0);
    strokeWeight(2);
    noFill();
    line(this.width/2, this.height, this.width/2, 0);
    line(0, this.height/2, this.width, this.height/2);
  }
}

/*class linear_regression{
  constructor(m, c){
    this.m = m;
    this.c = c;
  }
  draw_line(){
    for (var x = 0; x <= width; x ++){
      var x1 = x;
      var y1 = (this.m)*(x1/2) + (this.c);
      var x2 = x;
      var y2 = (this.m)*(x2/2) + (this.c);
      stroke('red');
      noFill();
      line(x1, y1, x2, y2);
    }
  }
}*/

class linear_regression{
  constructor(m, c){
    this.m = m;
    this.c = c;
  }
  draw_line(){

    for (var x = 0; x <= width*2; x ++){
      var x1 = x - width/2;
      var y1 = (this.m)*(x1/2) + (this.c);
      var x2 = x;
      var y2 = (this.m)*(x2/2) + (this.c);
      stroke('red');
      noFill();
      line(x1, y1, x2, y2);
    }
  }
}

class gird {
  constructor(height, width){
    this.height = height
    this.width = width
  }
  draw_grid(){
    for (var x = -this.width/2; x < this.width/2; x += this.width /100) {
      for (var y = -this.height/2; y < this.height/2; y += this.height / 50) {
        stroke(211);
        strokeWeight(1);
        line(x, 0, x, this.width/2);
        line(0, y, this.height/2, y);
      }
  }
  }
}


function draw() {
  background('white');
  translate(width/2, height/2)
  //grid1 = new gird(height, width)
  xy_axis = new axis(height/2, width/2)
  line1 = new linear_regression(-0.5, 0)
  //grid1.draw_grid()
  for (var i = -width/2; i < width/2; i += 10) {
    
  	line(i, -height/2, i, height/2);
  	line(width/2, i, -width/2, i);
  
  }
  xy_axis.draw_xy()
  rect(-250, -100, 10,10)

  line1.draw_line()

}
