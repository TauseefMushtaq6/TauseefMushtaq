const hamburger = document.querySelector(".hamburg");
const mobileMenu = document.querySelector(".nav-list ul");
const header = document.querySelector("header");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = "transparent";
    }
});
