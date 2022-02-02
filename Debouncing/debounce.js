const makeApicall=()=>{
    console.log('api call in progress');
}
let c=0;
const debouncer = (func,delay) => {
    //should remember if the call is called
    let debouncing;

    return function() {
        console.log(c++);
        debouncing && clearTimeout(debouncing);

        debouncing=setTimeout( () =>func.apply(this, arguments),delay);
    }
}

window.addEventListener('load',function(){
    var btn=document.getElementById('click');
    
    btn.addEventListener('click',debouncer(makeApicall,1000));
})

//debouncing does not give guaranteed results