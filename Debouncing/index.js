var time;
let count=0;
const debouncer=(func,delay)=>{
    count++; 
    console.log(count);
    if(time){
        clearTimeout(time);
    }

    time=setTimeout(()=>{
        func();
    },delay);


}

function myfunc(){
    console.log("Yeah it's working")
}