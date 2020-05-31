const menu = document.querySelector(".js-menu")
const navLinks = document.querySelector(".nav-links")

//Menú hamburguesa
menu.addEventListener("click", () => {
    menu.classList.toggle("is-active")
    
    if (navLinks.classList.contains("open")) {
      navLinks.classList.remove("open")
    } else {
      navLinks.classList.add("open")
    }
})



$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() > 850) {
      menu.style.display == "none"
      navLinks.classList.remove("open")
      menu.classList.remove("is-active")
    }
  })
  })
  


//carrousel página principal
$(document).ready(function () {
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

$(document).ready(function () {
$(window).resize(function () {
  if ($(window).width() > 600) {
    slickCarrousel();
  }
})
})


