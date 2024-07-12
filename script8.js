var nav = document.querySelector(".nav")
var body = document.querySelector("body")

body.addEventListener("wheel",(dets)=>{
    if(dets.deltaY < 0){
     nav.classList.add("fixed")
      console.log("ulta");
    }else{
        nav.classList.remove("fixed")
        console.log("sidda");
    }
})