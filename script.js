//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
}
get width(){
	return this.width;
}
get height(){
	return this.height;
}
	getArea(){
		 return rect_width * rect_height;
	}
}
// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//   }

  class Square extends Animal {
	getPerimeter(){
		return 4*sq_s;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
