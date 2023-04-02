
let navUl= document.querySelector("#navUl");
let menuIcon = document.querySelector("#menuIcon");
let mobileNav = document.querySelector("#mobileNav").style;
let home = document.querySelector("#hm");
let about = document.querySelector("#abt");
let skills = document.querySelector("#skl");
let education = document.querySelector("#edu");
let works = document.querySelector("#works");
let contact = document.querySelector("#cont");

function navBarToggle(){
    navUl.classList.toggle("toggleClass");
    if (mobileNav.display === "flex") {
      mobileNav.display = "none";
    } else {
      mobileNav.display = "flex";
    }
}
function removeClass(){
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
works.addEventListener("click", removeClass);
contact.addEventListener("click", removeClass);