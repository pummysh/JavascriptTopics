

// function outer(a){
//     return function inner(b){
//         return a + b;
//     }
// }

// console.log(outer(10)(20));


//Memoization

// function calculator(initialValue=0){
//     var value = initialValue;

//     function add(val){
//         value = value + val;
//         return value;
//     }

//     return { add };
// }

// var calc = calculator();

// console.log(calc.add(10));

// console.log(calc.add(10));


function x(){
    return function y(){
        for(let i=0;i<3;i++){
            setTimeout(()=>{
                console.log(i);
            },1000);
        }
    }
}

x()()