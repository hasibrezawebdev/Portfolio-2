let nav = document.querySelector("nav");
let navUl= document.querySelector("#navUl");
let menuIcon = document.querySelector("#menuIcon");
let mobileNav = document.querySelector("#mobileNav").style;
let home = document.querySelector("#hm");
let about = document.querySelector("#abt");
let skills = document.querySelector("#skl");
let education = document.querySelector("#edu");

function navBarToggle(){
    nav.classList.toggle("toggleClass");
    navUl.classList.toggle("toggleClass");
    if (mobileNav.display === "flex") {
      mobileNav.display = "none";
    } else {
      mobileNav.display = "flex";
    }
}
function removeClass(){
    nav.classList.remove("toggleClass");
    navUl.classList.remove("toggleClass");
    if (mobileNav.display === "flex") {
      mobileNav.display = "none";
    }
}

home.addEventListener("click", removeClass);
menuIcon.addEventListener("click", navBarToggle);
about.addEventListener("click", removeClass);
skills.addEventListener("click", removeClass);
education.addEventListener("click", removeClass);