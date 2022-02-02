//pollyfill is your own bind function that you can use

let name={
    firstname: 'John',
    lastname: 'william',
};

let printName=function(hometown){
    console.log(this.firstname + " "+ this.lastname+" form "+hometown);
}

// let printMyName=printName.bind(name);
// printMyName();

//every function in javascript have access to this bind so we have to create a function that every js function have that access 

Function.prototype.mybind=function(...args){
    //this->printName
    params=args.slice(1);
    let that=this;
    return function(...args2){

        that.apply(args[0],[...params,...args2]);
    }
}

let printMyName=printName.mybind(name,"bhiwadi");
printMyName();
