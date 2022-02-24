let count=0;
const throttle=(func,delay)=>{

    console.log("dffds")

    let lastcall=0;

    return function(){
        console.log(count++);

        if(Date.now()-lastcall>delay){
            lastcall=Date.now();
            // func.apply(this,arguments);
            func();
        }

    }
}

const myfunc=()=>{
    console.log("myfunc called ")
}

let btn=document.getElementById('c');
console.log(btn)
btn.addEventListener('click',throttle(myfunc,1000));