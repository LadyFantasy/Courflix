const menu = document.querySelector(".js-menu")
const navLinks = document.querySelector(".nav-links")

//Menú hamburguesa
menu.addEventListener("click", (e) => {
    e.stopPropagation()
    menu.classList.toggle("is-active")
    navLinks.classList.toggle("open")
})

navLinks.addEventListener("click", (e) =>{
  e.stopPropagation()
})

document.body.addEventListener("click", () => {
  navLinks.classList.remove("open")
  menu.classList.remove("is-active")
})


//evita que menú hamburguesa permanezca visible al agrandar la pantalla
$(document).ready(() => {
  $(window).resize(() => {
    if ($(window).width() > 850) {
      menu.style.display == "none"
      navLinks.classList.remove("open")
      menu.classList.remove("is-active")
    }
  })
  })


//carrousel página principal
$(document).ready(() => {
  $(".series-carrousel").slick({
    infinite: true,
    slidesToScroll: 3,
    slidesToShow:5,
    variableWidth: true,
    accesibility:true,
    arrows: true,
    responsive: [{
      breakpoint: 850,
      settings: {
        slidesToScroll: 1,
      }
    }]
  })
});


//carrousel vista BB
function slickCarrousel() {
  $(".series-carrousel-bb").slick({
    infinite: true,
    slidesToShow:5,
    slidesToScroll: 3,
    variableWidth: true,
  accesibility: true,
    arrows: true,
    responsive: [{
      breakpoint: 600,
      settings: "unslick"
    }]
  })
};

slickCarrousel()

$(document).ready(() => {
$(window).resize(() => {
  if ($(window).width() > 600) {
    slickCarrousel();
  }
})
})


