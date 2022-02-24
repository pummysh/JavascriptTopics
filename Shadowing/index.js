// var a=100;

// {
//     var a=10;
//     console.log(a);
// }

// console.log(a);

// var b=100;

// {
//     let b=20;
//     console.log(b);
// }
// console.log(b);

// let a=20;
// {
//     var a=100;
//     console.log(a);
// }
//it will give us error

// //it is illegal shadowing to use let variable to declare again and setting it to new value
// console.log(a);

// let a=30;
// function x(){
//     var a=100;
//     console.log(a)
// }
// x()
// console.log(a)

var a=20;
{
    let a=100;
    console.log(a)
}
console.log(a)