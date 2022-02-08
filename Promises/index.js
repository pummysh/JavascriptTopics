let p=new Promise((resolve,reject)=>{
    let a=9+1;

    if(a===2){
        resolve("Success");
    }else{
        reject("Failed");
    }
}).then((message)=>{
    console.log(message);
}).catch((e)=>{
    console.log(e);
})