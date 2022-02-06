let container=document.getElementById("container");

let arr=["https://media.istockphoto.com/photos/touch-of-fresh-moss-in-the-forest-picture-id1283852667?b=1&k=20&m=1283852667&s=170667a&w=0&h=tOrJ3mxPs3BZ9T6j9SDopILI8YDABaHiHh0IxaeWXd8=","https://thumbs.dreamstime.com/b/beautiful-barbie-white-brown-hair-stylish-blondy-doll-editorial-use-124738824.jpg","https://s.imgur.com/images/cta/ad-free/20220127/left.jpg"];

let count = 0;


let a=setInterval(()=>{
    container.innerHTML=null;
    console.log(count);
    if(count>=arr.length){
        count=0;
    }
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.src=arr[count];
  
    div.append(image);
    container.append(div);
    count++;
},1000)

const newImage =(val)=>{
    count=count+val;
    if(count<0){
        count=count+arr.length;
    }
    if(count>=arr.length){
        count=0;
    }
}