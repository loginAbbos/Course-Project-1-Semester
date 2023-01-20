const burger = document.getElementById('plate');
const navbar = document.getElementById('mobile-nav');
let navbarStatus = false

function navbarShow() {
    if (navbarStatus) {
        navbar.style.left = "-100%"
        navbarStatus = false

    }
    else{
        navbar.style.left = "0"
        navbarStatus = true
    }
}

burger.addEventListener('click', navbarShow)