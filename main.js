// const arrowLeft = document.querySelectorAll(".left-arrow")
// const arrowRight = document.querySelectorAll(".right-arrow")
// const carrousel = document.querySelectorAll(".series-carrousel")


document.addEventListener("click", (e) =>{
    if(e.target.closest(".fa.fa-arrow-left")) {
        e.target.parentNode.parentNode.scrollLeft -= e.target.parentNode.parentNode.offsetWidth
        console.log(e.target.parentNode.parentNode)
    }

    else if(e.target.closest(".left-arrow")) {
        e.target.parentNode.scrollLeft -= e.target.parentNode.offsetWidth
        console.log(e.target)
    }
})



document.addEventListener("click", (e) =>{
    if(e.target.closest(".fa.fa-arrow-right")) {
        e.target.parentNode.parentNode.scrollLeft += e.target.parentNode.parentNode.offsetWidth
        console.log(e.target.parentNode.parentNode)
    }

    else if(e.target.closest(".right-arrow")) {
        e.target.parentNode.scrollLeft += e.target.parentNode.offsetWidth
        console.log(e.target)
    }
})


