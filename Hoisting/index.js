// var a=5;
// let b=6;
// var c=9;

// function test1(){
//     var a=15;
//     let b=6;
//     function test2(){
//         var a=10;
//         console.log(a);
//     }

//     console.log(a,b);
//     test2();
// }

// test1();

var a=10
function x()
{
    var a=20;
    {
        let m=2;
        let sum=a+m
        console.log(sum)
        {
            const b=80;
            console.log(b+m+a)
        }
    }
    const b=10
    let m=2
    console.log(b+m+a)
}
x()
console.log(a)
