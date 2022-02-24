/*

let name={
    firstname: 'John',
    lastname: 'william',
    printFullName: function(){
        console.log(this.firstname + " "+ this.lastname);
    }
};

name.printFullName();

let name2={
    firstname: 'Pummy',
    lastname: 'Sharma',
}

//function borrowing

name.printFullName.call(name2);
//here the argument of call is the this parameter that shoud it point to

*/

//Another way 

// let name={
//     firstname: 'John',
//     lastname: 'william',
// };

// let printFullName=function(hometown){
//     console.log(this.firstname + " "+ this.lastname+" from "+hometown);
// }

// printFullName.call(name,"London");

// let name2={
//     firstname: 'Pummy',
//     lastname: 'Sharma',
// }

// printFullName.call(name2,"bhiwadi");
// //call pass the arguments separeted with commas 

// printFullName.apply(name2,["bhiwadi"]);
// //apply pass the arguments in form of array

// //Bind return the function that we can use later

// let printName=printFullName.bind(name2,"Alwar");
// printName();



// let friends={
//     chill:"yes",
//     masti:"yes",
//     siyapa:function(q){
//         console.log(this.chill +" "+ this.masti );
//     }
// }

// let study={
//     chill:"no",
//     masti:"no",
// }

// // friends.siyapa.call(study);

// // friends.siyapa.apply(study)

// let ans=friends.siyapa.bind(study)
// ans();


function contructor(a,b){
    this.name=a,
    this.age=b,
    this.x=function(){
        console.log(this.name);
    }
}

let ans=new contructor("Pummy",20);

ans.x();

let p={
    name:"Meera"
}

ans.x.call(p);
ans.x.apply(p);

