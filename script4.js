
let downarrow = document.querySelector(".downarrow")
let paragraf1 = document.querySelector(".paragraf1")

var run= function(){

    var  flag  = 0
    downarrow.addEventListener("click",function(){
        if(flag===0){
            console.log("heloo");
            paragraf1.style.opacity= 1
            downarrow.classList=`<i class="downarrow ri-arrow-up-s-line text-4xl >`
            flag = 1
        }else{
            console.log("heyy");
            paragraf1.style.opacity=0
            downarrow.classList=`<i class="downarrow ri-arrow-down-s-line text-4xl >`
            flag=0;
        }
       
    })
      
}

run()



































// document.querySelectorAll('.accordion-header').forEach(button => {
//     button.addEventListener('click', () => {
//         const accordionContent = button.nextElementSibling;

//         button.classList.toggle('active');

//         if (button.classList.contains('active')) {
//             accordionContent.style.display = 'block';
//         } else {
//             accordionContent.style.display = 'none';
//         }
//     });
// });

