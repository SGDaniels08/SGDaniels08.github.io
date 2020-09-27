// Landing Animation
const animationContainer = document.querySelector(".animation-container");
const animation = document.querySelector(".animation");

let j = 0;
let pos = -30;
setInterval(()=> {
    animation.src = `/images/animation/stickperson__frame${j}.png`;
    j++;
    pos += 3;
    if (j == 24) { j = 0; }
    animation.style.left = `${pos}px`;
    animation.style.top = "100px";

    // If position is 30 past view width, set pos back to -30

    // Halfway across screen: Stop, turn, wave for 3 second, pull out sign, hold for five seconds, put back,
    // continue walking.

}, 50);

// Stop, wave, sign animation
const stopWaveSignAnimation = () => {
    let k = 0;
    setInterval(()=> {
        animation.src = `/images/animation/waving${k}.png`;
        k++;
    }, 50);
}


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