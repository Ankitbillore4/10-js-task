let inputs = document.querySelector(".inp")
let text= document.querySelector(".text")

function Add(){
   if(inputs.value===""){
    alert("Please Enter Task")
   }else{
    let newElement = document.createElement("li")
    newElement.innerHTML=`${inputs.value} <i class="ri-delete-bin-6-fill"></i>`
    text.appendChild(newElement)
    inputs.value=""
    newElement.querySelector("i").addEventListener("click",function(){
        newElement.remove()
    })
    
   }
}