let arr=[1,2,3,4,5,6,7];

Array.prototype.myFilter=function(callback){
    let result=[];

    for(let index=0;index<this.length;index++){
        if(callback(this[index],index,this)){
            result.push(this[index]);
        }
    }
    return result;
}

let res=arr.myFilter((e)=>{
    return e%2===0;
})

console.log(res);