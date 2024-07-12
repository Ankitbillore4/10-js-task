let rightarrow = document.querySelector(".rightarrow")
let leftarrow = document.querySelector(".leftarrow")
let slider = document.querySelector(".slider")
let images = document.querySelectorAll(".images")

let newNumber = 1;
let imglength =  images.length;

let sliding = function(){
   slider.style.transform=`translateX(-${newNumber*100}%)`
   newNumber++;
};
let revsliding = function(){
   slider.style.transform=`translateX(-${(newNumber-2)*100}%)`
   newNumber--;
};

let firstslide = function(){
   slider.style.transform=`translateX(0%)`
  newNumber= 1;
}
let lastslide = function(){
   slider.style.transform=`translateX(-${(imglength-1)*100}%)`
  newNumber = imglength;
}

rightarrow.addEventListener("click",function(){
  if(newNumber < imglength){
   sliding()
  }else{
   firstslide()
  }
})

leftarrow.addEventListener("click",function(){
   console.log("helo");
   if(newNumber > 1){
    revsliding()
   }else{
    lastslide()
   }
 })


 var automic = setInterval(function() {
      if(newNumber < imglength){
         sliding()
        }else{
         firstslide()
        }
   },2000);
 

slider.addEventListener("mouseenter",function(){
   clearInterval(automic)
   console.log("helo");
})