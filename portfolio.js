// Landing Animation
const animationContainer = document.querySelector(".animation-container");
const animation = document.querySelector(".animation");

let j = 0;
let k = 0;
let m = 10;
let width = document.body.clientWidth;
let pos = -18;
setInterval(()=> {

    // Walk out
    if (pos % 6 === 0 && pos < width/2) { 
    animation.src = `/images/animation/walking/stickperson__frame${j}.png`;
    j++;
    pos += 6;
    if (j == 24) { j = 0; }
    animation.style.left = `${pos}px`;
    animation.style.top = "100px";
    }

    if (pos >= width/2) { // At halfway point

        if (k < 52) { // Wave

            animation.src = `/images/animation/waving/stickperson__waving${k}.png`;
            k++;
        }
        else {  // Walk off
            animation.src = `/images/animation/walking/stickperson__frame${m}.png`;
            m++;
            pos += 6;
            if (m == 24) { m = 0; }
            animation.style.left = `${pos}px`;
            animation.style.top = "100px";
        }
        
        if (pos > width + 100) {
            j = 0;
            k = 0;
            m = 10;
            pos = -18;
        }
    }

    
    // If position is 30 past view width, set pos back to -30

    // Halfway across screen: Stop, turn, wave for 3 second, pull out sign, hold for five seconds, put back,
    // continue walking.

}, 50);

// Stop, wave, sign animation
const stopWaveSignAnimation = () => {
    let k = 0;
    
            //Framecount
    // wavea0: last walking frame (passing1, frame6)
    // wavea3: standing still
    // wavea6: facing forward
    // wavea9: arm up to wave
    // (six frames of waving, however long it lasts)
    // waveb0: facing forward
    // waveb3: hand behind back (maybe hold this?)
    // waveb6: sign up in air
    // (hold for however long)
    // wavec0: sign up in air
    // wavec3: hand behind back
    // wavec6: facing forward
    // wavec9: standing still (sideways)
    // wavec12: first walking frame (begin walk loop)
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
aboutme.addEventListener("touchstart", ()=> {
        latinCaption.classList.toggle("hidden");
        englishCaption.classList.toggle("hidden"); 
});

// Dark Mode

const body = document.querySelector(".body");
const header = document.querySelector(".header");
const header__listItemAnchor = document.querySelector(".header__listItemAnchor");
const header__titleAnchor = document.querySelector(".header__titleAnchor");
const spacer1 = document.querySelector("#spacer1");
const spacer2 = document.querySelector("#spacer2");
const spacer3 = document.querySelector("#spacer3");
const spacer4 = document.querySelector("#spacer4");
const footer = document.querySelector(".footer");

const darkmodeButton = document.querySelector("#darkmode-button");

darkmodeButton.addEventListener("click", ()=> {
    body.classList.toggle("body-dark");
    header.classList.toggle("header-dark");
    header__listItemAnchor.classList.toggle("header__listItemAnchor-dark");
    header__titleAnchor.classList.toggle("header__titleAnchor-dark");
    spacer1.classList.toggle("spacer1-dark");
    spacer2.classList.toggle("spacer2-dark");
    spacer3.classList.toggle("spacer3-dark");
    spacer4.classList.toggle("spacer4-dark");
    footer.classList.toggle("footer-dark");
});