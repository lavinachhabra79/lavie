import  { heroMarquee } from "../data/heroMarquee.js"
import { experties } from "../data/domainExperties.js"

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

// -------------------------------------------------Hero section marquee ------------------------------------------------- 
const heroServicesContainer = document.querySelectorAll('.hero-section-bottom-services-container')

let marqueeElement = ''

heroMarquee.forEach((service)=>{
    marqueeElement += `<div class="marquee-item-service">${service} <span></span></div>`
})

heroServicesContainer.forEach((container)=>{
    container.innerHTML = marqueeElement
})


// -------------------------------------------------Video section play button animation------------------------------------------------- 

gsap.from('.play-outer-circle',2,{
    width : "220px",
    height : "220px",
    ease : 'ease.out',
    yoyo : true,
    repeat : -1
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
        const random = Math.floor(Math.random() * expertiesColor.length);
        
        function createImage(text, len) {

            let drawing = document.createElement("canvas");
        
            let width = (len * 20) + 50 
            let height = 100
            drawing.width = width
            drawing.height = height
            let ctx = drawing.getContext("2d");
        
            ctx.fillStyle = expertiesColor[random];
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
            spawnX = 100 + (experty.length * 30)
            spawnAxix = 2
        }
        else if (spawnAxix === 2){
            spawnX = _width - (experty.length * 10)
            spawnAxix = 3
        }
        else if (spawnAxix === 3){
            spawnX = _width05
            spawnAxix = 1
        }
        console.log(spawnX)
        const newExp = Bodies.rectangle(spawnX, 100, (experty.length * 25) + 30 ,110, { 
            chamfer: { radius: 50 },
            render:{
                fillStyle : expertiesColor[random],
                sprite: {
                    texture: createImage(experty, experty.length),
                    xScale: 1.1,
                    yScale: 1.1
                }
            }
        });
        
        // setTimeout(World.add(world,newExp), 5000)
        World.add(world,newExp)
    })

    const ceiling = Bodies.rectangle(_width05, -25, _width, 50, { isStatic: true });//ceiling
    const floor = Bodies.rectangle(_width05, _height+25, _width, 50, { isStatic: true , fillStyle : 'orange' });//floor
    const rightwall = Bodies.rectangle(_width+25, _height05, 50, _height, { isStatic: true });//rightwall
    const leftwall = Bodies.rectangle(-25, _height05, 50, _height, { isStatic: true });//leftwall


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

    // context for MatterTools.Demo
/*
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
		*/
};

matterJS();