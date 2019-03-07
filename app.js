
//creating a instance 
let class1 = require('./class.js')
let Rect1 = new class1(2,3);
console.log(`Area of rectangle: ${Rect1.area}`);
Rect1.printDescription();
// New Object
let Rect2 = new class1(4,8);
console.log(`Area of rectangle: ${Rect2.area}`);
Rect2.printDescription();
Rect2.area = 25 ;
console.log(Rect2.area)
console.log(Rect2.width)