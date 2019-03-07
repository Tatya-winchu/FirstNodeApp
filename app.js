
//creating a instance 
let class1 = require('./class.js')
let Rect1 = new class1(2,3);
console.log(Rect1)
console.log(Rect1.getArea());
// New Object
let Rect2 = new class1(4,8);
console.log(Rect2)
console.log(Rect2.getArea());