let arr=[5,8,9,-6,3];

// const output=arr.map((a)=>a*10);

// console.log(output);
// console.log(arr);

// const odd=arr.filter((a)=>a%2);

// console.log(odd);

// let min=arr.reduce((acc,curr)=>{
//     if(acc>curr){
//         acc=curr;
//     }
//     return acc;
// },Infinity)

// let max=arr.reduce((acc,curr)=>{
//     if(acc<curr){
//         acc=curr;
//     }
//     return acc;
// },-Infinity)

arr.forEach(function(a){
    a=a*10;
});

console.log(arr);


// let item=[
//     {name:"Barbie" , price:100},
//     {name:"Milk" , price:20},
//     {name:"Earphones" , price:100}
// ];

// let ans=item.map((a)=>{
//     return a.price;
// })

// console.log(ans,item);


// let arr=[1,2,3,4,5,6,7,];

// let a1=arr.map((a)=>a*10);
// console.log("arr from map",arr,a1)

// arr.forEach((a)=>{
//     return a*10
// });

// console.log("arr from forEach" ,arr);