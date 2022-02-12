function outer(a){
    return function inner(){
        return a;
    }
}

let check=outer("Closure");
console.log(check());

for(let i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
    },i*1000);
}