
//starts from here only
//this function is contructor function
// function Point2d(x,y){
//     this.x=x;
//     this.y=y;
// }
// var p1=new Point2d(1,2);
// console.log(p1.__proto__)
// it will give only object as it is based on object only

function Point2d(x,y){
    this.x=x;
    this.y=y;
}

Point2d.prototype.move=function(dx,dy){
    this.x=+dx;
    this.y=+dy;
}
var p1=new Point2d(1,2);


console.log(p1.__proto__);
//here we get move function in prototype

p1.move(3,4);

console.log(p1.x);
console.log(p1.y);



// ways to create prototype are:
// new Object  Object.prototype;
// new Array Array.prototype


