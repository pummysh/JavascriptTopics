// var a="Pummy";

// console.log(a.__proto__.__proto__);



let obj={
    name:"Pummy",
    age:20,
}

let newObject=Object.create(obj);
console.log(newObject.__proto__);