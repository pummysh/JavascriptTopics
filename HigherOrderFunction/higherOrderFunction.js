let arr=[5,8,9,-6,3];

// const output=arr.map((a)=>a*10);

// console.log(output);
// console.log(arr);

const odd=arr.filter((a)=>a%2);

// console.log(odd);

let min=arr.reduce((acc,curr)=>{
    if(acc>curr){
        acc=curr;
    }
    return acc;
},Infinity)

let max=arr.reduce((acc,curr)=>{
    if(acc<curr){
        acc=curr;
    }
    return acc;
},-Infinity)

arr.forEach((a)=>a*2);

console.log(arr);