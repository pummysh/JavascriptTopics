// function outer(a){
//     return function inner(b){
//         return a+b;
//     }
// }

// let p=outer(7);
// console.log(p(7));

// for(var i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000);
// }

// for(let i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000);
// }

const closure=(i)=>{
    setTimeout(()=>{
         console.log(i);
    },i*1000)
}

for(var i=0;i<5;i++){
    closure(i);
}