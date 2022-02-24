const makeApicall=()=>{
    console.log('api call in progress');
}

let count=0;

function throttle(fn,wait){
    let lastCall = 0;
    return function(){

        console.log(count++);

        //present time, last call time was made

        if(Date.now()-lastCall>wait){

            lastCall=Date.now();
            
            fn.apply(this,arguments);
        }
    }
}


window.addEventListener('load',function(){
    var btn=document.getElementById('click');
    
    btn.addEventListener('click',throttle(makeApicall,1000));
})

//debouncing does not give guaranteed results