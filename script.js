// Sticky Navbar
window.onscroll = function() { stickyNavbar() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Smooth Scroll
const links = document.querySelectorAll('.nav-link');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop - 50,
        behavior: "smooth"
    });
}
