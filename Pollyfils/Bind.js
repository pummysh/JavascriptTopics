let obj={
    name:"Pummy",
    lastName:"Sharma",
};

const printName=function(){
    console.log(this.name + "_____"+this.lastName);
}

// let n=printName.bind(obj);
// n();


Function.prototype.myBind=function(...args1){
    let params=args1.splice(1);
    that=this;
    return function(...args2){
        that.apply(args1[0],[...params,...args2]);
    }
}

let newFunc=printName.myBind(obj);

newFunc();
