

 var isName= document.querySelector(".Name")
 var Email= document.querySelector(".Email")
 var Password= document.querySelector(".Password")
 var Submit= document.querySelector(".Submit")
 var nameError= document.querySelector(".nameError")
 var EmailError= document.querySelector(".EmailError")
 var PasswordError= document.querySelector(".PasswordError")
 var from= document.querySelector(".from")

nameError.innerHTML= '';
 Submit.addEventListener("click",function(){
    if(isName==="" || isName===""){
    nameError.innerHTML+=`Name can't be blank`
    EmailError.innerHTML+=`Email can't be blank`
    PasswordError.innerHTML+=`Password Atleast 6 Character`
    }else{
        nameError.innerHTML="sai he bhai"
    }
        
     
 })


 





