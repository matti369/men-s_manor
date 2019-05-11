//--------------------HAMBURGER MENU---------------------------
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function() {
     hamburger.classList.toggle("active");
     var menu = document.querySelector(".navigation");
     menu.classList.toggle("hide");
})

//---------------------------GALLERY---------------------------

function myFunction(imgs) {
     var expandImg = document.getElementById("expandedImg");
     var imgText = document.getElementById("imgtext");
     expandImg.src = imgs.src;
     
     imgText.innerHTML = imgs.alt;

     expandImg.parentElement.style.display = "block";
   } 


//-----------------------------Close promotion----------------------------

const closeProm = document.querySelector(".closePromotion");
closeProm.addEventListener("click", function() {
     var promotion = document.querySelector(".promotion")
     promotion.classList.add("hide");
})

//----------------------------------Scrolling to part---------------------



