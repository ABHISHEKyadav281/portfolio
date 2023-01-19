//  loader
gsap.from(".black h1 span",{
    x:150,
    opacity:0,
    stagger:1
})
gsap.to(".black",{
    y:-25,
    height:0,
    duration:1,
    delay:3
})
gsap.to(".green",{
    y:-25,
    height:0,
    duration:1,
    delay:3.1
})
gsap.to("#loader",{
    y:-25,
    height:0,
    duration:1,
    delay:3.2
})

// typing animation

var type = new Typed(".typing", {
    strings: ["developer", "programmer", "designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// cursor

let cursor=document.querySelector(".cursor");
addEventListener("mousemove",function(dets){
    
    cursor.style.opacity=1;
    cursor.style.top=`${dets.y-25}px`;
    cursor.style.left=`${dets.x+3}px`;
})


// skill
let fd=document.querySelector("#fd");
let frontend=document.querySelector("#frontend");
let ud=document.querySelector("#ud");
let ui=document.querySelector("#ui");
let bd=document.querySelector("#bd");
let backend=document.querySelector("#backend");
var language1=document.querySelector("#language1")
var language2=document.querySelector("#language2")
var language3=document.querySelector("#language3")

// skil frontend
fd.addEventListener("click",function()
{
frontend.style.transform="rotate(90deg)";
ui.style.transform="rotate(0deg)";
backend.style.transform="rotate(0deg)";
language1.style.display="flex";
language2.style.display="none";
language3.style.display="none";
});

frontend.addEventListener("click",function()
{
frontend.style.transform="rotate(90deg)";
ui.style.transform="rotate(0deg)";
backend.style.transform="rotate(0deg)";
language1.style.display="flex";
language2.style.display="none";
language3.style.display="none";
});

// skill ui/ux
ud.addEventListener("click",function()
{
frontend.style.transform="rotate(0deg)";
ui.style.transform="rotate(90deg)";
backend.style.transform="rotate(0deg)";
language1.style.display="none";
language2.style.display="flex";
language3.style.display="none";
})

ui.addEventListener("click",function()
{
frontend.style.transform="rotate(0deg)";
ui.style.transform="rotate(90deg)";
backend.style.transform="rotate(0deg)";
language1.style.display="none";
language2.style.display="flex";
language3.style.display="none";
})

// skil backend
bd.addEventListener("click",function(){
frontend.style.transform="rotate(0deg)";
ui.style.transform="rotate(0deg)";
backend.style.transform="rotate(90deg)";
language1.style.display="none";
language2.style.display="none";
language3.style.display="flex";
})

backend.addEventListener("click",function(){
frontend.style.transform="rotate(0deg)";
ui.style.transform="rotate(0deg)";
backend.style.transform="rotate(90deg)";
language1.style.display="none";
language2.style.display="none";
language3.style.display="flex";
})



// language1
var arr = [
    { lang: "JavaScript", perc:"70" },
    { lang:"HTML", perc:"90" },
    { lang: "CSS", perc:"90" },
    { lang: "React", perc:"20" }
]
var clutter = "";
arr.forEach(function (data) {
    clutter += `<div class="l">
    <h3>${data.lang}</h3>
    <div class="percentage">
    <progress value="${data.perc}" max="100"></progress>
     <p>${data.perc}%</p>
    </div>
</div>`;
});
language1.innerHTML = clutter

 
// language2
var arr2 = [
    { lang: "Adobe XD", perc: "60" },
    { lang:"Figma", perc:"50" }
]
var clutter = "";
arr2.forEach(function (data) {
    clutter += `<div class="l">
    <h3>${data.lang}</h3>
    <div class="percentage">
    <progress value="${data.perc}" max="100"></progress>
     <p>${data.perc}%</p>
    </div>
</div>`;
});
language2.innerHTML = clutter;


// language3
var arr3 = [
    { lang: "NodeJS", perc: "70" },
    { lang: "ExpressJS", perc: "60" },
    { lang: "Java", perc: "60" },
    { lang:"SQL", perc:"70" }
]
var clutter = "";
arr3.forEach(function (data) {
    clutter += `<div class="l">
    <h3>${data.lang}</h3>
    <div class="percentage">
    <progress value="${data.perc}" max="100"></progress>
     <p>${data.perc}%</p>
    </div>
</div>`;
});
language3.innerHTML = clutter;




// designs

var Designs = [
    { pic: "./pics/d1.png"},
    { pic: "./pics/d2.png"},
    { pic: "./pics/d3.png"},
    { pic: "./pics/d4.png"},
    { pic: "./pics/d5.png"},
    { pic:"./pics/d6.png"}
]
var clutter = "";
Designs.forEach(function (data) {
    clutter += `<div class="project">
    <div class="imgs">
        <img src="${data.pic}" alt="">
    </div>
   
</div>`;
});
document.querySelector(".Designs").innerHTML = clutter;

// animations

var Animations = [
    { pic: "./anims/Untitled.mp4"},
    { pic: "./anims/Untitled (1).mp4"},
    { pic: "./anims/Untitled (2).mp4"},
    { pic: "./anims/Untitled (3).mp4"},
    { pic: "./anims/Untitled (4).mp4"},
    { pic:"./anims/Untitled (5).mp4"},
    { pic:"./anims/Untitled (6).mp4"}
]
var clutter = "";
Animations.forEach(function (data) {
    clutter += `<div class="project">
        <video src="${data.pic}" autoplay muted loop></video>
    </div>`;
});
document.querySelector(".Animations").innerHTML = clutter;


// projects-mini
var projectMini = [
    {  name: "Neverland",link:"https://abhishekyadav281.github.io/neverland/" },
    {  name: "This is Digital" ,link:"https://abhishekyadav281.github.io/ThisIsDigital/"},
    {  name: "Lagunitas" ,link:"https://abhishekyadav281.github.io/lagunitas/"},
    {  name: "Whatsapp" ,link:" https://abhishekyadav281.github.io/wtsp/"},
    {  name: "HairStudio",link:"https://abhishekyadav281.github.io/HairStudio/" },
    {  name:"ShopNow",link:"https://abhishekyadav281.github.io/ShopNow/" }
]
var clutter = "";
projectMini.forEach(function (data) {
    clutter += `<div class="project-min">
    <h3>${data.name}</h3>
    <a href="${data.link}">Demo <i class="ri-arrow-right-circle-line"></i></a>
    <div class="slide"></div>
</div>`;
});
document.querySelector(".projects-mini").innerHTML = clutter;

// projects

var projects = [
    { pic: "./pics/p1.png", name: "Neverland",link:"https://abhishekyadav281.github.io/neverland/" },
    { pic: "./pics/p2.png", name: "This is Digital" ,link:"https://abhishekyadav281.github.io/ThisIsDigital/"},
    { pic: "./pics/p3.png", name: "Lagunitas" ,link:"https://abhishekyadav281.github.io/lagunitas/"},
    { pic: "./pics/p4.png", name: "Whatsapp" ,link:" https://abhishekyadav281.github.io/wtsp/"},
    { pic: "./pics/p5.png", name: "HairStudio",link:"https://abhishekyadav281.github.io/HairStudio/" },
    { pic:"./pics/p6.png", name:"ShopNow",link:"https://abhishekyadav281.github.io/ShopNow/" }
]
var clutter = "";
projects.forEach(function (data) {
    clutter += `<div class="project">
    <div class="imgs">
        <img src="${data.pic}" alt="">
    </div>
    <h3>${data.name}</h3>
    <a href="${data.link}">Demo <i class="ri-arrow-right-circle-line"></i></a>
</div>`;
});
document.querySelector(".projects").innerHTML = clutter;



