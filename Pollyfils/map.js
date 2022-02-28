let arr=[1,2,3,4,5,6,7];

//arr.map(callback(currentValue,index,arr));

Array.prototype.myMap=function(callback) {
    let result=[];

    for(let index=0;index<this.length;index++){
        result.push(callback(this[index],index,this));
    }
    return result;
}

let res=arr.myMap((item)=>{
    return item=item+1000;
})

console.log(res);