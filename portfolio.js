
const latinCaption = document.createElement("figcaption");
latinCaption.classList.add("aboutme__Latincaption");
latinCaption.innerHTML = "Forsan et haec olim meminisse iuvabit."

const englishCaption = document.createElement("figcaption");
englishCaption.classList.add("aboutme__Latincaption");
englishCaption.innerHTML = "Perhaps one day it will help to remember even these things."

const captionAttribution = document.createElement("figcaption");
captionAttribution.classList.add("aboutme__captionattribution");
captionAttribution.innerHTML = "- Aeneid 1.206";

const aboutme = document.querySelector(".aboutme__figure");

aboutme.addEventListener("mouseover", ()=> {
    console.log("inside element");
    aboutme.appendChild(englishCaption);    
});
aboutme.addEventListener("mouseout", ()=> {
    console.log("outside element");
    aboutme.appendChild(latinCaption);
});