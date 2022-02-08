// function outer(a){
//     let value=a
//     return function inner(b){
//         return value+b;
//     }
// }

// console.log(outer(5)(11));


function x(){
    for(let i=0;i<5;i++){
        setTimeout( () =>{
            console.log(i);
        },i*1000);
    }
}

x();




