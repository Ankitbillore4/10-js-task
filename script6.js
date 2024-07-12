let endDate = prompt("Enter Date and Time:");
document.querySelector(".endDate").innerText=endDate

let inputs = document.querySelectorAll("input")


function clock(){
    let end = new Date(endDate)
    let now = new Date()
    let diff = (end - now )/1000
 
    if(diff < 0) return

  inputs[0].value = (Math.floor(diff/3600/24))
  inputs[1].value = (Math.floor(diff/3600) % 24 )
  inputs[2].value = (Math.floor(diff/60) % 60 )
  inputs[3].value = (Math.floor(diff % 60 ));

}

clock()

setInterval(function(){
  clock()
},1000)