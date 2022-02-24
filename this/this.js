// console.log(this);



let obj={
    name:"Pummy",
    age:21,
    printName:function(){
        console.log(this);
        console.log(this.name);
    }
}

obj.printName()

// var name="Avdesh"
// function outer(){
//     var name ="Kargosia";
//     function inner(){
//         var name ="Avdesh";
//         console.log(this.name);
//     }
//     inner();
// }

// outer();