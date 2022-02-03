document.querySelector("#form").addEventListener('keyup',(e)=>{
    console.log(e);
    if(e.target.dataset.uppercase!==undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})