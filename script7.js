

var string = ""
var buttons = document.querySelectorAll(".button")

Array.from(buttons).forEach(function(button){
   button.addEventListener("click",function(e){
    if(e.target.innerHTML== "="){
        string= eval(string)
        document.querySelector("input").value = string;
    }else if(e.target.innerHTML== "Ac"){
        string= ""
        document.querySelector("input").value = string;
    }
    else {
        string += e.target.innerHTML
        document.querySelector("input").value = string;
      
    }
    
   })
})


