const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const CloseMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
CloseMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll(".menu a[href^='#']");

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function () {
        menu.classList.remove("menu_opened");    
    })
});