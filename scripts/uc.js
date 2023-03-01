gsap.fromTo('#uc-section-main-img',3,
    {
        y : '-30px',
        ease : "power1.inOut",
        yoyo : true,
        repeat : -1
    },
    {
        y : '30px',
        ease : "power1.inOut",
        yoyo : true,
        repeat : -1
    }
)

function navColor(){
    var navbar = document.querySelector('.nevbar-container')
    var windowY = window.scrollY
    if(windowY >= 100){
        navbar.classList.add('navbar-color')
    }
    else{
        navbar.classList.remove('navbar-color')
    }
}

window.addEventListener('scroll', navColor)