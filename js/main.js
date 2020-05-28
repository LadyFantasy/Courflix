const menu = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const menuActive = document.querySelector("is-active")


menu.addEventListener("click", () => {
  if(menu.style.display = "inline-block"){
  
    menu.classList.toggle("is-active")
    if (navLinks.classList.contains("open")) {
      navLinks.classList.remove("open")}
    
    else{
      navLinks.classList.add("open")
    }
  }
    })


// document.addEventListener("click", (e) => {
//   if (e.target.closest(".hamburger-box")) {
//     console.log(e.target)
//     navLinks.style.display = "none"
//     menu.classList.remove("is-active")
//   }
// })



$(document).ready(function(){
$(".series-carrousel").slick({
    infinite: true,
    slidesToScroll: 2,
    variableWidth: true,
    accesibility: true,
    arrows: true,
   responsive: [
          {
            breakpoint: 850,
            settings: {
              slidesToScroll: 1,
            }
          }
    //    
      ]
  })
});

