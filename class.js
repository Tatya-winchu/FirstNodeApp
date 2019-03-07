//definition of class 
class Rectangle {
    constructor(_height,_width){
        this.height = _height;
        this.width =_width;
        console.log(`Creating a rectangle ${this.width}*${this.height}`);
    }
    //adding a getter 
     getArea(){
        return this.width*this.height
    }
}

module.exports = Rectangle;
