let btn = document.querySelector(".game1btn");

btn.addEventListener("click",()=>{
    window.location.href="http://127.0.0.1:5500/game1.html";
})

function clock(){
    let date= new Date();
    let h= date.getHours();
    let m= date.getMinutes();
    let s= date.getSeconds();
    let half="AM";

    if(h==0){
        h=12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    h= (h<10) ? "0"+ h : h;
    m= (m<10) ? "0"+ m : m;
    s= (s<10) ? "0"+ s : s;
    
    var time= h + ":" + m + ":" + s + "" +half;
   document.querySelector("#clock").innerText=time;
   document.getElementById("clock").textContent = time;
   setTimeout(clock, 1000);
}
clock();