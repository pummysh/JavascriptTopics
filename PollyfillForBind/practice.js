// let actors={
//     actor1:"Kajol",
//     actor2:"Kat",
//     actor3:"kareena"
// }

// let printName=function(){
//     console.log(this.actor1 + " " + this.actor2 + " " + this.actor3);
// }

// let ans=printName.bind(actors);
// ans();

// Function.prototype.newBind=function(...args1){
//     params=args1.slice(1);
//     let that=this;
//     return function(...args2){
//         that.apply(args1[0],[...params,...args2]);
//     }
// }

// let ans=printName.newBind(actors);
// ans();

let arr=[9,5,8,3];

// arr.sort((a,b)=>b-a);

// console.log(arr);

function Mysort(){
    console.log(this)
}

Mysort.prototype.sortArr=function(){
    
   

}

arr.sortArr();