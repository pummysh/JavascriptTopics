// let p=new Promise((resolve,reject)=>{
//     let a=9+1;

//     if(a===2){
//         resolve("Success");
//     }else{
//         reject("Failed");
//     }
// }).then((message)=>{
//     console.log(message);
// }).catch((e)=>{
//     console.log(e);
// })

// let promise=new Promise((resolve, reject) =>{
//    let p="pummy";

//    if(p==='pummy'){
//       resolve("succesfull");
//    }else{
//       reject("Failed");
//    }
// }).then((message)=>{
//    console.log(message);
// }).catch((e)=>{
//    console.log(e);
// })

let promise1 =new Promise((resolve,reject) =>{
   resolve("promise1");
})

let promise2=new Promise((resolve, reject) =>{
   resolve("promise2");
})

let promise3 = new Promise((resolve, reject) =>{
   reject("promise3")
})

let promise4=new Promise((resolve, reject) =>{
   resolve("promise4");
})
// Promise.all([promise1,promise2,promise3,promise4])
// .then((results)=>console.log(results))
// .catch((err)=>console.log(err))

// Promise.race([promise1, promise2, promise3])
// .then((results)=>console.log(results))
// .catch((err)=>console.log(err))

Promise.allSettled([promise1, promise2, promise3])
.then((results)=>console.log(results))
.catch((err)=>console.log(err))
