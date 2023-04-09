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
		return this._width * this._height;
	}
}
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  getPerimeter() {
    return (2 * this.width+this.height);
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
