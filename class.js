//definition of class 
class Rectangle {
    constructor(_height,_width){
        console.log('The rectangle is being created');
        this.height = _height;
        this.width =_width;
        
    }
    //adding a getter 
     getArea(){
        return this.width*this.height
    }
    //description method
    printDescription(){
        console.log(`Creating a rectangle of ${this.width}*${this.height}`);
    }
}

module.exports = Rectangle;
