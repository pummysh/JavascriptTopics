let p=new Promise((resolve,reject)=>{
    let a=15+90;

    if(a===21){
        resolve("Success");
    }else{
        reject("Failed");
    }

}).then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.log(err);
})

let promise1=new Promise((resolve, reject) =>{
    resolve("promise1");
})

let promise2=new Promise((resolve, reject) =>{
    reject("promise2");
})

let promise3=new Promise((resolve, reject) =>{
    resolve("promise3");
})

Promise.race(
    [promise1, promise2, promise3]
).then((message)=>{
    console.log(message);
}).catch((e)=>{
    console.log(e);
})