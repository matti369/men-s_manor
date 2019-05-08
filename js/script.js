//--------------------HAMBURGER MENU---------------------------
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function() {
     hamburger.classList.toggle("active");
     var menu = document.querySelector(".navigation");
     menu.classList.toggle("hide");
})



