let btn=document.querySelector("#btn2");
let btn2=document.querySelector("#btn1");
let tex=document.querySelector("#last");


btn.addEventListener("click",()=>{
    let img=document.querySelector("#imgsrc");
   

    if(img.src.includes="./1.5soap.jpg"){
        img.src="./1.2clubtickets.jpg";
        tex.innerHTML="Trip to goa => beer,girls,party";
    }

    

    btn.addEventListener("click",()=>{
    if(img.src.includes="./1.2clubtickets.jpg"){
        img.src="./1.1apple001.jpg";
        tex.innerHTML="Apple 5g pro max ultra phone *Fully filled with girls Number*";
    }

    btn.addEventListener("click",()=>{
    if(img.src.includes="./1.1apple001.jpg"){
        img.src="./1.9narutofamily.jpg";
        tex.innerHTML="Our special Family , 👉next is one girl";
    }

    btn.addEventListener("click",()=>{
    if(img.src.includes="./1.9narutofamily.jpg"){
        img.src="./1dogimage.jpg";
        tex.innerHTML="You fell for it, there is no girl";
    }

    btn.addEventListener("click",()=>{
    if(img.src.includes="./1dogimage.jpg"){
        img.src="./1.8girl.jpg";
        tex.innerHTML="Bro not selected family for this girl  WOW!! ,  ";
    }

    btn.addEventListener("click",()=>{
    if(window.location.href="http://127.0.0.1:5500/game1.html"){
        window.location.href="http://127.0.0.1:5500/index.html"
        alert("returing to home");
        }
    else{
        img.src="./1.5soap.jpg";
    }

    })
})
})
})
})

})

btn2.addEventListener("click",()=>{
    alert("you will get your gift by EOD");
    if(window.location.href="http://127.0.0.1:5500/game1.html"){
        window.location.href="http://127.0.0.1:5500/index.html"
        }
})