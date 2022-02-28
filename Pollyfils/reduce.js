let arr=[1,2,3,4,5,6,7];

// arr.reduce((acc,cur,index,arr) => {

// },initialValue);

Array.prototype.myReduce=function(callback,initialValue){
    
    let acc=initialValue;

    for(let index=0;index<this.length;index++){
        acc=callback(acc,this[index],index,this);
    }
    return acc;
}

let ans= arr.myReduce((acc,cur,index,arr) =>
acc+cur
,0);

console.log(ans);