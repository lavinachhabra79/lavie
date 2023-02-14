import  { heroMarquee } from "../data/heroMarquee.js"
import { experties } from "../data/domainExperties.js"
import { heroTypewriter } from "../data/heroTypewriter.js"
import { reviews } from "../data/reviews.js"

// gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);


// -------------------------------------------------mouse pointer change ------------------------------------------------- 
var $circle = $('.mouse-cursor'),
    $follow = $('.mouse-cursor-follow');

function moveCircle(e) {
  TweenLite.to($circle, 0.3, {
      x: e.clientX,
      y: e.clientY
  });
  TweenLite.to($follow, 0.7, {
      x: e.clientX,
      y: e.clientY
  });  
}

function hoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 0
  });
  TweenLite.to($follow, 0.3, {
      scale: 3
  });  
}

function unhoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 1
  });
  TweenLite.to($follow, 0.3, {
      scale: 1
  });  
}

$(window).on('mousemove', moveCircle);

$("a , button, input, textarea, label, select, option").hover(hoverFunc, unhoverFunc);
// $("button").hover(hoverFunc, unhoverFunc);

// -------------------------------------------------Navbar color change ------------------------------------------------- 
function navColor(){
    var navbar = document.querySelector('.navbar-container')
    var windowY = window.scrollY
    if(windowY >= 250){
        navbar.classList.add('navbar-color')
    }
    else{
        navbar.classList.remove('navbar-color')
    }
}

window.addEventListener('scroll', navColor)

// -------------------------------------------------contact us menu animation ------------------------------------------------- 


// let selectInputInquiryType = document.querySelector('#inquiryType')
// let selectDropdown = document.querySelector('#select-dropdown')

// selectInputInquiryType.addEventListener('focus',()=>{
//     selectDropdown.style = 'transform: rotate(180deg)'
// })
// selectInputInquiryType.addEventListener('blur',()=>{
//     selectDropdown.style = 'transform: rotate(0deg)'
// })

let contactBtns = document.querySelectorAll("#contactUsBtn")

// .addEventListener("click", handleOpenMenu)

contactBtns.forEach((btn)=>{
    btn.addEventListener("click", handleOpenMenu)
})

document.getElementById("contactCloseBtn").addEventListener("click", handleCloseMenu)


function handleOpenMenu() {
    var menuOpenTimeline = gsap.timeline()
    menuOpenTimeline.play()
    console.log('click')

    let element = document.querySelector('.contactus-form-container')

    
    const formInput = element.querySelectorAll('input , select , textarea , label, svg')


    menuOpenTimeline.to('#contact-section', {
        duration : 0.1,
        ease : 'power1.inOut',
        clipPath : 'circle(141.4% at 100% 0)',
    })
    
    menuOpenTimeline.to('.contactus-section-color-1', {
        duration : 0.8,
        ease : 'power1.out',
        clipPath : 'circle(141.4% at 100% 0)',
    },'<0.1')
    menuOpenTimeline.to('.contactus-section-color-2', {
        duration : 0.8,
        ease : 'power1.out',
        clipPath : 'circle(141.4% at 100% 0)',
    },'<0.1')
    menuOpenTimeline.to('.contactus-section-color-3', {
        duration : 0.8,
        ease : 'power1.out',
        clipPath : 'circle(141.4% at 100% 0)',
    },'<0.1')
    menuOpenTimeline.to('.contactus-section-color-4', {
        duration : 0.8,
        ease : 'power1.out',
        clipPath : 'circle(141.4% at 100% 0)',
    },'<0.1')
    menuOpenTimeline.to('.contactus-section-color-5', {
        duration : 0.8,
        ease : 'power1.out',
        clipPath : 'circle(141.4% at 100% 0)',
    },'<0.1')
    menuOpenTimeline.to('.contactus-section-color-bg', {
        duration : 0.8,
        ease : 'power1.out',
        clipPath : 'circle(141.4% at 100% 0)',
    },'<0.1')
    menuOpenTimeline.to('#contactus-section-content-container-main', {
        duration : 0.8,
        ease : 'power1.out',
        clipPath : 'circle(141.4% at 100% 0)',
    },'<0')
    menuOpenTimeline.to(formInput, { 
        y: 0, 
        // rotate : 0,
        opacity : 1,
        ease : 'power2.out',
        duration: 0.8, 
        stagger: 0.15 
    },'>0.1')

    menuOpenTimeline.to('.arrow-marker-contactus-path',{
        strokeDashoffset: 0,
        duration: 15.5, 
        ease : "expo.out",
    })
    menuOpenTimeline.to('.arrow-marker-contactus-pointer-path',{
        strokeDashoffset: 0,
        duration: 15.5, 
        ease : "expo.out",
    },'<1')
}

function handleCloseMenu(){
    var menuCloseTimeline = gsap.timeline()
    menuCloseTimeline.play()
    console.log('click')
    
    let element = document.querySelector('.contactus-form-container')

    
    const formInput = element.querySelectorAll('input , select , textarea , label, svg')
    

    menuCloseTimeline.to('.arrow-marker-contactus-path',{
        strokeDashoffset: 0,
        duration: 1, 
        ease : "expo.out",
    })
    menuCloseTimeline.to('.arrow-marker-contactus-pointer-path',{
        strokeDashoffset: 0,
        duration: 1, 
        ease : "expo.out",
    },'<1')
    menuCloseTimeline.to(formInput, { 
        y: 300, 
        // rotate : '20deg',
        opacity : 0,
        ease : 'power2.in',
        duration: 0.5, 
        stagger: 0.15 
    },'<0.1')
    menuCloseTimeline.to('#contactus-section-content-container-main', {
        duration : 0.8,
        ease : 'power1.in',
        clipPath : 'circle(0% at 100% 0)',
    },'<0.5')
    menuCloseTimeline.to('.contactus-section-color-bg', {
        duration : 0.8,
        ease : 'power1.in',
        clipPath : 'circle(0% at 100% 0)',
    },'<0')
    menuCloseTimeline.to('.contactus-section-color-5', {
        duration : 0.8,
        ease : 'power1.in',
        clipPath : 'circle(0% at 100% 0)',
    },'<0.1')
    menuCloseTimeline.to('.contactus-section-color-4', {
        duration : 0.8,
        ease : 'power1.in',
        clipPath : 'circle(0% at 100% 0)',
    },'<0.1')
    menuCloseTimeline.to('.contactus-section-color-3', {
        duration : 0.8,
        ease : 'power1.in',
        clipPath : 'circle(0% at 100% 0)',
    },'<0.1')
    menuCloseTimeline.to('.contactus-section-color-2', {
        duration : 0.8,
        ease : 'power1.in',
        clipPath : 'circle(0% at 100% 0)',
    },'<0.1')
    menuCloseTimeline.to('.contactus-section-color-1', {
        duration : 0.8,
        ease : 'power1.in',
        clipPath : 'circle(0% at 100% 0)',
    },'<0.1')
    menuCloseTimeline.to('#contact-section', {
        duration : 0.8,
        ease : 'power1.inOut',
        clipPath : 'circle(0% at 100% 0)',
    },'<0.1')
    
}
// -------------------------------------------------Hero section typewriter ------------------------------------------------- 

// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
{
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = heroTypewriter;

// Speed (in milliseconds) of typing.
var speedForward = 200, //Typing Speed
    speedWait = 1500, // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 100; //Backspace Speed

//Run the loop
typeWriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1") //Header element
  
  // Determine if animation should be typing or backspacing
  if (!isBackspacing) {
    
    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {
      
      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
        
      // If character isn't a pipe, continue typing.
      } else {
        // Type header or subheader depending on whether pipe has been detected
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }
      
    // If full string has been typed, switch to backspace mode.
    } else if (i == aString.length) {
      
      isBackspacing = true;
      setTimeout(function(){ typeWriter(id, ar); }, speedWait);
      
    }
    
  // If backspacing is enabled
  } else {
    
    // If either the header or the paragraph still has text, continue backspacing
    if (eHeader.text().length > 0 ) {
      
      // If paragraph still has text, continue erasing, otherwise switch to the header.
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
    
    // If neither head or paragraph still has text, switch to next quote in array and start typing.
    } else { 
      
      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
      setTimeout(function(){ typeWriter(id, ar); }, 50);
      
    }
  }
}
}
// -------------------------------------------------Hero section marquee ------------------------------------------------- 
const heroServicesContainer = document.querySelectorAll('.hero-section-bottom-services-container')

let marqueeElement = ''

heroMarquee.forEach((service)=>{
    marqueeElement += `<div class="marquee-item-service">${service} <span></span></div>`
})

heroServicesContainer.forEach((container)=>{
    container.innerHTML = marqueeElement
})


// -------------------------------------------------Achievement section counter animation------------------------------------------------- 

gsap.utils.toArray('.counter-value').forEach(function (el) {
    var initVal = Number(el.innerText.replace('+',''))
    var target = { val: initVal };
    gsap.to(target, {
        val: el.getAttribute('endVal'),
        duration: 1,
        scrollTrigger: {
            trigger: '.achivement-container',
            start: 'top center',
        },
        onUpdate: function () {
            el.innerText = target.val.toFixed(0) + '+';
        },
    });
});

// -------------------------------------------------Achievement section play button animation------------------------------------------------- 

gsap.from('.play-outer-circle',2,{
    width : "220px",
    height : "220px",
    ease : 'ease.out',
    yoyo : true,
    repeat : -1
})


// -------------------------------------------------Service section bg image ------------------------------------------------- 

gsap.to('#service-section-static-img-1',.5,{
    opacity : 1,
    scale : 1,
    scrollTrigger : {
        trigger : '.first-sticky-container',
        start: 'top center',
        end: 'bottom center',
        toggleActions: "play reverse play reverse",
    }
})


gsap.to('#service-section-static-img-2',.5,{
    y: '-50px',
    opacity : 1,
    scale : 1,
    scrollTrigger : {
        trigger : '.sticky-container-2',
        start: 'top center',
        end: 'bottom center',
        toggleActions: "play reverse play reverse",
    }
})


gsap.to('#service-section-static-img-3',.5,{
    opacity : 1,
    scale : 1,
    scrollTrigger : {
        trigger : '.last-sticky-container',
        start: 'top center',
        end: 'bottom center',
        toggleActions: "play reverse play reverse",
    }
})

// -------------------------------------------------Service section title markers ------------------------------------------------- 

gsap.to('.title-marker-design-path',5.5,{
    strokeDashoffset: 0,
    ease : "expo.out",
    scrollTrigger: {
        trigger : '.first-sticky-container',
        start : "top center center",
        end : "bottom center",
        toggleActions: "play none none none",
      }
})

gsap.to('.title-marker-technology-path',7.5,{
    strokeDashoffset: 0,
    ease : "expo.out",
    scrollTrigger: {
        trigger : '.sticky-container-2',
        start : "top center center",
        end : "bottom center",
        toggleActions: "play none none none",
      }
})

gsap.to('.title-marker-business-path',3.5,{
    strokeDashoffset: 0,
    ease : "expo.out",
    scrollTrigger: {
        trigger : '.last-sticky-container',
        start : "top center center",
        end : "bottom center",
        toggleActions: "play none none none",
      }
})


// -------------------------------------------------Service section service list ------------------------------------------------- 

const list1 = gsap.utils.selector('.service-list-1')

gsap.to(list1('.service-single-type-subservice'),0.5,{
    x: '100px',
    opacity : 1,
    stagger:0.1,
    scrollTrigger: {
        trigger : '.service-list-1',
        start : "top center center",
        end : "bottom center",
        toggleActions: "play none play reverse",
      }
})

const list2 = gsap.utils.selector('.service-list-2')

gsap.to(list2('.service-single-type-subservice'),0.5,{
    x: '100px',
    opacity : 1,
    stagger:0.1,
    scrollTrigger: {
        trigger : '.service-list-2',
        start : "top center center",
        end : "bottom center",
        toggleActions: "play none play reverse",
      }
})

const list3 = gsap.utils.selector('.service-list-3')

gsap.to(list3('.service-single-type-subservice'),0.5,{
    x: '100px',
    opacity : 1,
    stagger:0.1,
    scrollTrigger: {
        trigger : '.service-list-3',
        start : "top center center",
        end : "bottom center",
        toggleActions: "play none play reverse",
      }
})

// -------------------------------------------------matter js experties------------------------------------------------- 

var _canvasContainer = document.getElementById('headerEffectCanvas');
//   element: canvasContainer,
		
var _width = _canvasContainer.clientWidth,
	_height = _canvasContainer.clientHeight,
    _width05 = _width /2,
    _height05 = _height /2;

// console.log(_width + " x " + _height);

function matterJS() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        // element: document.body,
        element: _canvasContainer,
        engine: engine,
        options: {
            // width: 800,
            // height: 600,
            width: _width,
            height: _height,
            // showAngleIndicator: true,
            showAngleIndicator: false,
						wireframes: false,
						background: 'black'
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies    
    let spawnAxix = 1
    const expertiesColor = ['#2474BD','#9840DD','#31AA86','#D2955C','#E97878']
    experties.forEach((experty,index)=>{
        // const random = Math.floor(Math.random() * expertiesColor.length);
        
        function createImage(text, len) {

            let drawing = document.createElement("canvas");
        
            let width = (len * 20) + 50 
            let height = 100
            drawing.width = width
            drawing.height = height
            let ctx = drawing.getContext("2d");
        
            ctx.fillStyle = experty.color;
            ctx.beginPath();
            ctx.arc(height/2, height/2, height/2, Math.PI/2,3*Math.PI/2);
            ctx.fill();
            
            ctx.beginPath();
            ctx.rect(height/2, 0, width - height, height);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(width-height/2, height/2, height/2, 3*Math.PI/2,Math.PI/2);
            ctx.fill();

            ctx.fillStyle = "#fff";
            ctx.font = "32px Mulish";
            ctx.textAlign = "center";
            ctx.textBaseline = 'middle'
            ctx.fillText(text, width/2, height/2);
            // ctx.strokeText("Canvas Rocks!", 5, 130);
        
            return drawing.toDataURL("image/png");
        }
        let spawnX;
        if ( spawnAxix === 1 ){
            spawnX = 100 + (experty.name.length * 30)
            spawnAxix = 2
        }
        else if (spawnAxix === 2){
            spawnX = _width - (experty.name.length * 10)
            spawnAxix = 3
        }
        else if (spawnAxix === 3){
            spawnX = _width05
            spawnAxix = 1
        }
        const newExp = Bodies.rectangle(spawnX, 100, (experty.name.length * 25) + 30 ,110, { 
            chamfer: { radius: 50 },
            render:{
                fillStyle : experty.color,
                sprite: {
                    texture: createImage(experty.name, experty.name.length),
                    xScale: 1.1,
                    yScale: 1.1
                }
            }
        });
        
        // setTimeout(World.add(world,newExp), 5000)
        World.add(world,newExp)
    })

    const ceiling = Bodies.rectangle(_width05, -26, _width, 50, { isStatic: true });//ceiling
    const floor = Bodies.rectangle(_width05, _height+26, _width, 50, { isStatic: true , fillStyle : 'orange' });//floor
    const rightwall = Bodies.rectangle(_width+26, _height05, 50, _height, { isStatic: true });//rightwall
    const leftwall = Bodies.rectangle(-26, _height05, 50, _height, { isStatic: true });//leftwall


    World.add(world, [
        // walls
        ceiling,
        floor,
        rightwall,
        leftwall
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);
    mouseConstraint.mouse.element.removeEventListener(
        "mousewheel",
        mouseConstraint.mouse.mousewheel
      );
      mouseConstraint.mouse.element.removeEventListener(
        "DOMMouseScroll",
        mouseConstraint.mouse.mousewheel
      );
    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: _width, y: _height }
    });

};

matterJS();


// -------------------------------------------------unboxing section service list ------------------------------------------------- 

const unboxingLoadingContainer = gsap.utils.selector('.unboxing-section-loading-blob-container')

gsap.fromTo(unboxingLoadingContainer('div'),
    {
        duration : 1,
        ease : 'steps(1)',
        opacity : 0,
        repeat : -1,
        stagger : 0.33
    },
    {
        duration : 1,
        ease : 'steps(1)',
        opacity : 1,
        repeat : -1,
        stagger : 0.33
    },
)

// -------------------------------------------------Reviews section happy marker ------------------------------------------------- 

gsap.to('.title-marker-happy-path',5.5,{
    strokeDashoffset: 0,
    ease : "expo.out",
    scrollTrigger: {
        trigger : '.review-section-content-container',
        start : "top center center",
        end : "bottom center",
        toggleActions: "play none none none",
      }
})

// -------------------------------------------------Reviews section review slide inject ------------------------------------------------- 

const reviewSlideContainer = document.querySelector('.review-section-slides-inner')


let reviewSlides = ''

reviews.forEach((review)=>{
    reviewSlides += `
    <div class="review-section-slide">
        <div class="review-section-slide-content-container">
            <p class="para-typo slide-para">
                ${review.clientReview}
            </p>
            <div>
                <h3 class="para-typo slide-client">${review.clientName}</h3>
                <h4 class="slide-client-designation">${review.clientDesignation}</h4>
            </div>
        </div>
    </div>
    <div class="review-section-slides-spacer"></div>
    `
})


reviewSlideContainer.innerHTML = reviewSlides

// -------------------------------------------------Reviews section review slideer ------------------------------------------------- 

var slideDelay = 3;
var slideDuration = 0.5;
var wrap = true;

var slides = document.querySelectorAll(".review-section-slide");
var prevButton = document.querySelector("#slider-prev-button");
var nextButton = document.querySelector("#slider-next-button");
var progressWrap = gsap.utils.wrap(0, 1);

var numSlides = slides.length;

gsap.set(slides, {
    // backgroundColor: "#232323",
    xPercent: i => i * 100
});

var wrapX = gsap.utils.wrap(-100, (numSlides - 1) * 100);
var timer = gsap.delayedCall(slideDelay, autoPlay);

var animation = gsap.to(slides, {
    xPercent: "+=" + (numSlides * 100),
    duration: 1,
    ease: "none",
    paused: true,
    repeat: -1,
    modifiers: {
        xPercent: wrapX
    }
});

var proxy = document.createElement("div");
var slideAnimation = gsap.to({
    
}, {
   
});
var slideWidth = 0;
var wrapWidth = 0;

// var draggable = new Draggable(proxy, {
//     trigger: ".review-section-slides-container",
//     // inertia: true,
//     // onPress: updateDraggable,
//     // onDrag: updateProgress,
//     // onThrowUpdate: updateProgress,
//     cursor: "none",
//     snap: {     
//         x: snapX
//     }
// });

resize();

window.addEventListener("resize", resize);

prevButton.addEventListener("click", function() {
    animateSlides(1);
});

nextButton.addEventListener("click", function() {
    animateSlides(-1);
});

function updateDraggable() {
    timer.restart(true);
    slideAnimation.kill();
    this.update();
}

function animateSlides(direction) {
    
    timer.restart(true);
    slideAnimation.kill();
    var x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth);
    
    slideAnimation = gsap.to(proxy, {
        ease : "expo.inOut",
        x: x,
        duration: slideDuration,
        onUpdate: updateProgress
    });  
}

function autoPlay() {  
    // if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
    //     timer.restart(true);
    // } else {
        animateSlides(-1);
    // }
}

function updateProgress() { 
    animation.progress(progressWrap(gsap.getProperty(proxy, "x") / wrapWidth));
}

function snapX(value) {
    let snapped = gsap.utils.snap(slideWidth, value);
    return wrap ? snapped : gsap.utils.clamp(-slideWidth * (numSlides - 1), 0, snapped);
}

function resize() {
  
    var norm = (gsap.getProperty(proxy, "x") / wrapWidth) || 0;

    slideWidth = slides[0].offsetWidth;
    wrapWidth = slideWidth * numSlides;

    wrap || draggable.applyBounds({minX: -slideWidth * (numSlides - 1), maxX: 0});

    gsap.set(proxy, {
        x: norm * wrapWidth
    });

    animateSlides(0);
    slideAnimation.progress(1);
}

// -------------------------------------------------Values section bg img ------------------------------------------------- 

gsap.to('#value-section-static-img-1',.5,{
    opacity : 1,
    scale : 1,
    scrollTrigger : {
        trigger : '.values-sticky-container-1',
        start: 'top 100%',
        end: 'bottom center',
        toggleActions: "play reverse play reverse",
    }
})


gsap.to('#value-section-static-img-2',.5,{
    y: '-50px',
    opacity : 1,
    scale : 1,
    scrollTrigger : {
        trigger : '.values-sticky-container-2',
        start: 'top center',
        end: 'bottom center',
        toggleActions: "play reverse play reverse",
    }
})



// -------------------------------------------------Values section hover bounce animation ------------------------------------------------- 


let yinayngShadowAnim = gsap.to('#values-yinyang-shadow-img', 3,
    {
        paused : true,
        opacity : 1,
        ease : 'power1.inOut',
        yoyo : true,
        repeat : -1
    }
)

let yinyangAnim = gsap.to('#values-yinyang-img',3,
    {
        paused : true,
        y : '80px',
        ease : 'power1.inOut',
        yoyo : true,
        repeat : -1
    }
)

let yinyangContainer = document.getElementsByClassName('values-yinyang-container')[0]

yinyangContainer.addEventListener("mouseenter", () => {yinyangAnim.play(); yinayngShadowAnim.play()})
yinyangContainer.addEventListener("mouseleave", () => {yinyangAnim.pause(); yinayngShadowAnim.pause()})


let commitmentShadowAnim = gsap.to('#values-commitment-shadow-img',3,
    {
        paused : true,
        opacity : 1,
        ease : 'power1.inOut',
        yoyo : true,
        repeat : -1
    }
)
let commitmentAnim = gsap.to('#values-commitment-img',3,
    {
        paused : true,
        y : '80px',
        ease : 'power1.inOut',
        yoyo : true,
        repeat : -1
    }
)

let commitmentContainer = document.getElementsByClassName('values-commitment-container')[0]

commitmentContainer.addEventListener("mouseenter", () => {commitmentAnim.play(); commitmentShadowAnim.play()})
commitmentContainer.addEventListener("mouseleave", () => {commitmentAnim.pause(); commitmentShadowAnim.pause()})


// -------------------------------------------------askus section bg angle ------------------------------------------------- 

function calculateBGangle() {
    console.log('here')
    let askusSection = document.getElementById('askus-section')
    
    let askusHeight = askusSection.offsetHeight
    let askusWidth = askusSection.offsetWidth
    
    let thirdSide = Math.sqrt(askusHeight * askusHeight + askusWidth * askusWidth);
    let angleA = Math.atan(askusHeight / askusWidth) * 180 / Math.PI;
    let angleB = 90 - a;
    
    askusSection.style.backgroundImage = `linear-gradient(-${angleA}deg, #E2D564 50%, transparent 50%)`;
}

calculateBGangle()
window.addEventListener('resize', calculateBGangle)


// -------------------------------------------------askus section arrow marker ------------------------------------------------- 

gsap.to('.arrow-marker-askus-path',15.5,{
    strokeDashoffset: 0,
    ease : "expo.out",
    scrollTrigger: {
        trigger : '.askus-section-content-container',
        start : "top center center",
        end : "bottom center",
        toggleActions: "play none none none",
      }
})

gsap.to('.arrow-marker-askus-pointer-path',15.5,{
    strokeDashoffset: 0,
    ease : "expo.out",
    delay : 1,
    scrollTrigger: {
        trigger : '.askus-section-content-container',
        start : "top center center",
        end : "bottom center",
        toggleActions: "play none none none",
      }
})

// -------------------------------------------------design process img floater ------------------------------------------------- 

gsap.to('#designprocess-img', 3,
{
    // paused : true,
    // opacity : 1,
    y : '80px',
    ease : 'power1.inOut',
    yoyo : true,
    repeat : -1
}
)

// -------------------------------------------------footer section invisible marker ------------------------------------------------- 

gsap.to('.title-marker-footer-invisible-path',5.5,{
    strokeDashoffset: 0,
    ease : "expo.out",
    scrollTrigger: {
        trigger : '.footer-section-content-container',
        start : "top center center",
        end : "bottom center",
        toggleActions: "play none none none",
      }
})

// -------------------------------------------------body bg color change ------------------------------------------------- 

gsap.to('body',.5,{
    background : '#000',
    ease : "expo.inOut",
    scrollTrigger: {
        trigger : '#experties-section',
        start : "top 40%",
        end : "bottom 60%",
        toggleActions: "play reverse play reverse",
      }
})

gsap.to('body',.5,{
    background : '#000',
    ease : "expo.inOut",
    scrollTrigger: {
        trigger : '#review-section',
        start : "top 40%",
        end : "bottom 60%",
        toggleActions: "play reverse play reverse",
      }
})

gsap.to('body',.5,{
    background : '#000',
    ease : "expo.inOut",
    scrollTrigger: {
        trigger : '#footer-section',
        start : "top 40%",
        end : "bottom 60%",
        toggleActions: "play reverse play reverse",
      }
})

// -------------------------------------------------loader change ------------------------------------------------- 

// let loader = document.getElementById('loader')

// const loaderCols = element.querySelectorAll('.loader-col')
window.addEventListener('load', setTimeout(function(){

    var loaderTimeline = gsap.timeline()
    

    loaderTimeline.to(' .loader-col',0.5,{
        // height : 0,
        stagger : 0.1,
        ease : 'power1.in',
        background : '#ECDE62',
        color : '#000'
    },'>1')

    loaderTimeline.to('.loading-h1',1,{
        opacity : 0,
        stagger : 0.1,
        ease : 'power1.out',
    },'>0.5')

    loaderTimeline.to(' .loader-col',1,{
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        // clipPath: 'polygon(99% 0, 100% 0, 100% 100%, 99% 100%)',
        // width:'1px',
        stagger : 0.1,
        ease : 'power1.out',
    },'<0.5')
    
    // loaderTimeline.to(' .loader-col',0.5,{
    //     height : 0,
    //     stagger : 0.2,
    //     ease : 'power1.in'
    // },'<1.5')
    loaderTimeline.to('#loader',0.1,{
        display : 'none'
    },'>0.01')
    
    // loader.style.display = 'none'
}),5000)
