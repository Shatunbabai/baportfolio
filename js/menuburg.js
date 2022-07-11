const burgerButton = document.getElementsByClassName("burgerMenu");
const closeButton = document.querySelector(".closeMenu");
const burgerMenu = document.querySelector(".mobileMenu");
const screenWidth = window.screen.width

document.getElementById("burgerButton").onclick = function() {openMenu()};
document.getElementById("closeMenu").onclick = function() {closeMenu()};

function openMenu() {
    if(burgerMenu.classList.contains('hide') && screenWidth < 426) {
        burgerMenu.classList.remove("hide");
        burgerMenu.classList.add("show");
        console.log("open menu")
    } else {
        console.log("some error open, but we are open =)")
        burgerMenu.classList.remove("hide");
        burgerMenu.classList.add("show");
        console.log("open menu")
    }
}

function closeMenu() {
    if(burgerMenu.classList.contains('show')) {
        burgerMenu.classList.remove("show");
        burgerMenu.classList.add("hide");
        console.log("close menu")
    } else {
        console.log("some error close")
    }
}