// hamburger

const hamburger =document.querySelector(".hamburger");
const menu =document.querySelector(".menu")

hamburger.addEventListener('click', function(event) {
  event.stopPropagation(); 
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.addEventListener("click",function(event){

  if(menu.classList.contains("active")&&
    !(menu.contains(event.target))){
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  }
});