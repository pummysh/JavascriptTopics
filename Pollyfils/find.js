let arr=[1,2,3,4,5,6,7];

/*
let ans=arr.find((e)=>{
    return e>3;
})
//find return the first value which satisfies our condition
console.log(ans);
*/

Array.prototype.myFind=function(callback){

    for(let index=0;index<this.length;index++){
        if(callback(this[index],index,this)){
            return this[index];
        }
    }

}

let res= arr.myFind((e)=>{
    return e>3
})

console.log(res)
