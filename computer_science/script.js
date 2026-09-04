// ========================================
// YMN COLLEGE - COMPUTER SCIENCE
// JavaScript
// ========================================


// Mobile Navigation
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// Close mobile menu after clicking a link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {

        const navLinks = document.querySelector(".nav-links");

        navLinks.classList.remove("active");

    });
});


// Simple scroll effect for navbar
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(15, 23, 42, 0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});


// Current year automatically in footer
const footerText = document.querySelector(".footer-content p:last-child");

if (footerText) {
    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} YMN College. All Rights Reserved.`;
}
