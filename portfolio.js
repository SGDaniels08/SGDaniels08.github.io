// Landing Animation
const animationContainer = document.querySelector(".animation-container");
const animation = document.querySelector(".animation");

let j = 0;
let pos = -30;
setInterval(()=> {
    animation.src = `/images/animation/frame${j}.png`;
    j++;
    pos += 3;
    if (j == 12) { j = 0; }
    animation.style.left = `${pos}px`;
    animation.style.top = "100px";
}, 50);

// About Me
const latinCaption = document.querySelector(".about-me__Latincaption");
const englishCaption = document.querySelector(".about-me__Englishcaption");

const aboutme = document.querySelector(".about-me__figure");

aboutme.addEventListener("mouseover", ()=> {
    console.log("inside element");
    latinCaption.classList.toggle("hidden");
    englishCaption.classList.toggle("hidden");   
});
aboutme.addEventListener("mouseout", ()=> {
    console.log("outside element");
    latinCaption.classList.toggle("hidden");
    englishCaption.classList.toggle("hidden"); 
});