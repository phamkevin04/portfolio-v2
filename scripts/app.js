
// to target the mobile-menu to trigger on smaller screen (in header.css)
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// to display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active'); //targeting the mobile Menu class and then turn it on
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

// action to trigger the mobile menu 
menu.addEventListener('click', mobileMenu);

// Green Sock Animations
gsap.registerPlugin(ScrollTrigger) // allowed to use scroll trigger

gsap.from('.animate-hero', { // animate to flow into the page hero section
    duration: 1.5,
    opacity: 0,
    y: -200,
    stagger: 0.5
});