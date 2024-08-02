// hamburger

const hamburger =document.querySelector(".hamburger");
const menu =document.querySelector(".menu")

hamburger.addEventListener('click', function(event) {
  event.stopPropagation(); 
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.addEventListener("click",function(event){

  if(menu.classList.contains("active")){
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetElement = document.querySelector(this.getAttribute('href'));
      const offset = -50;

      window.scrollTo({
          top: targetElement.offsetTop + offset,
          behavior:"smooth"
      });
  });
});