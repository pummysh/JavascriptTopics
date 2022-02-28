var arr=[1,2,3,4,5,6,7,8,9];
/*

//arr.forEach(callback(currentValue,index,arr));

arr.forEach((currentValue,index,arr)=>{
    console.log(currentValue,index,arr);
});
*/


Array.prototype.myForEach=function(callback){
    // console.log(this);
    //here this is pointing to the arr as we call arr.myForEach

    for(let index=0;index<this.length;index++){
        callback(this[index],index,this)
    }

}
// arr.myForEach(()=>{})
// arr.myForEach()

arr.myForEach((currentValue)=>{
    console.log(currentValue+100);
})