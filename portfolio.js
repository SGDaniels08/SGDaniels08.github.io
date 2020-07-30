
const latinCaption = document.querySelector(".aboutme__Latincaption");
const englishCaption = document.querySelector(".aboutme__Englishcaption");

const aboutme = document.querySelector(".aboutme__figure");

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