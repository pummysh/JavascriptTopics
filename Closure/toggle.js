function toggler(){
    var arr=arguments;
    var index=-1;

    return function(){
        //this is exaple of closure because it memoize the index value
        index=index+1;
        if(index>=arr.length){
            index=0;
        }
        return arr[index];
    }
}

const toggle=toggler(1,2,3);

console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());


