
// const carrousel = document.querySelectorAll(".series-carrousel")





// document.addEventListener("click", (e) =>{
//     if(e.target.closest(".fa.fa-arrow-left")) {
//         e.target.parentNode.parentNode.scrollLeft -= e.target.parentNode.parentNode.offsetWidth
//         console.log(e.target.parentNode.parentNode)     
//     }

//     else if(e.target.closest(".left-arrow")) {
//         e.target.parentNode.scrollLeft -= e.target.parentNode.offsetWidth
//         console.log(e.target.parentNode)
//     }
// })



// document.addEventListener("click", (e) =>{
//     if(e.target.closest(".fa.fa-arrow-right")) {
//         e.target.parentNode.parentNode.scrollLeft += e.target.parentNode.parentNode.offsetWidth
//         console.log(e.target.parentNode.parentNode)
//     }

//     else if(e.target.closest(".right-arrow")) {
//         e.target.parentNode.scrollLeft += e.target.parentNode.offsetWidt;
//         console.log(e.target.parentNode)
//     }
// })


$(".series-carrousel").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    centerPadding: "1rem",
    centerMode: true,
    accesibility: true,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
          }
        },
        {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
    //    
      ]
  });