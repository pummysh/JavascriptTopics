

// function outer(a){
//     return function inner(b){
//         return a + b;
//     }
// }

// console.log(outer(10)(20));


//Memoization

function calculator(initialValue=0){
    var value = initialValue;

    function add(val){
        value = value + val;
        return value;
    }

    return { add };
}

var calc = calculator();

console.log(calc.add(10));

console.log(calc.add(10));

