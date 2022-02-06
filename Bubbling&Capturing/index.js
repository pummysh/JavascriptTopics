// document.querySelector("#grandparent")
//     .addEventListener('click', ()=>{
//         console.log("grandparent clicked");
// });

// document.querySelector("#parent")
//     .addEventListener('click', ()=>{
//         console.log("parent clicked");
// });

// document.querySelector("#child")
//     .addEventListener('click', ()=>{
//         console.log("child clicked");
// });

//if we write false then it behave same as bubbling
// document.querySelector("#grandparent")
//     .addEventListener('click', ()=>{
//         console.log("grandparent clicked");
// },false);

// document.querySelector("#parent")
//     .addEventListener('click', ()=>{
//         console.log("parent clicked");
// },false);

// document.querySelector("#child")
//     .addEventListener('click', ()=>{
//         console.log("child clicked");
// },false);


//this is the example of trickling and capturing
document.querySelector("#grandparent")
    .addEventListener('click', ()=>{
        console.log("grandparent clicked");
},true);

document.querySelector("#parent")
    .addEventListener('click', ()=>{
        console.log("parent clicked");
},true);

document.querySelector("#child")
    .addEventListener('click', ()=>{
        console.log("child clicked");
},true);

/*
document.querySelector("#grandparent")
    .addEventListener('click', ()=>{
        console.log("grandparent clicked");
},true);//capturing

document.querySelector("#parent")
    .addEventListener('click', ()=>{
        console.log("parent clicked");
},false);//bubbling

document.querySelector("#child")
    .addEventListener('click', ()=>{
        console.log("child clicked");
},true);//capturing

*/

/*

document.querySelector("#grandparent")
    .addEventListener('click', ()=>{
        console.log("grandparent clicked");
},true);

document.querySelector("#parent")
    .addEventListener('click', ()=>{
        console.log("parent clicked");
},false);

document.querySelector("#child")
    .addEventListener('click', ()=>{
        console.log("child clicked");
},false);
*/

//stop propagation i.e it will stop all the propogation i.e bubbling and capturing

// document.querySelector("#grandparent")
//     .addEventListener('click', (e)=>{
//         e.stopPropagation();
//         console.log("grandparent clicked");
// },true);

// document.querySelector("#parent")
//     .addEventListener('click', (e)=>{
//         // e.stopPropagation();
//         console.log("parent clicked");
// },true);

// document.querySelector("#child")
//     .addEventListener('click', (e)=>{
//         // e.stopPropagation();
//         console.log("child clicked");
// },true);