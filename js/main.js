const menu = document.querySelector(".js-menu")
const navLinks = document.querySelector(".nav-links")
const menuActive = document.querySelector("is-active")


menu.addEventListener("click", () => {
  menu.classList.add("is-active", "activate")
    navLinks.style.display = "flex"
})


document.addEventListener("click", (e) => {
  if (e.target.closest(".hamburger-box")) {
    console.log(e.target)
    navLinks.style.display = "none"
    menu.classList.remove("is-active")
  }
})



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

