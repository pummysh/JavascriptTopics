let multiply=function(a,b) {
    console.log(a*b);
}

let multiplyByTwo = multiply.bind(this,2);
//this 2 is the value of x, and it form a closure to the function this is called curring
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5);

let multiply2num = multiply.bind(this,3,7);
multiply2num(5);
//this argument is of no use if we pass all arguments that are require in bind function

let mul= multiply.bind(this);
mul(5,8);
//this is not curring


let multiplyNew=function(x){
    return function(y){
        console.log(x*y);
    }
}

let n=multiplyNew(2);
n(8)