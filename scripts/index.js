import  { heroMarquee } from "../data/heroMarquee.js"

// -------------------------------------------------Hero section marquee ------------------------------------------------- 
const heroServicesContainer = document.querySelectorAll('.hero-section-bottom-services-container')

console.log(heroServicesContainer)

let marqueeElement = ''

heroMarquee.forEach((service)=>{
    marqueeElement += `<div class="marquee-item-service">${service} <span></span></div>`
})

heroServicesContainer.forEach((container)=>{
    container.innerHTML = marqueeElement
})


// -------------------------------------------------Video section play button ------------------------------------------------- 

gsap.from('.play-outer-circle',2,{
    width : "220px",
    height : "220px",
    ease : 'ease.out',
    yoyo : true,
    repeat : -1
})