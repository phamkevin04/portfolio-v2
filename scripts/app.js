
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



//Get the back to Top button
var mybutton = document.getElementById("top__btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 30);
    } else clearTimeout(scrollAnimation);
}


// Green Sock Animations
gsap.registerPlugin(ScrollTrigger) // allowed to use scroll trigger

gsap.from('.animate-hero', { // animate to flow into the page hero section
    duration: 1.5,
    opacity: 0,
    y: -200,
    stagger: 0.5
});

gsap.from('.animate-about', { /* text on the left */
    scrollTrigger: '.animate-about',
    duration: 1.5,
    opacity: 1,
    x: -200,
    stagger: 0.5
});

gsap.from('.animate-img', { /* image on the right */
    scrollTrigger: '.animate-about',
    duration: 1.5,
    opacity: 0,
    x: 200,
    
});

gsap.from('.animate-experience', { /* text on the left */
    scrollTrigger: '.animate-experience',
    duration: 1.5,
    opacity: 1,
    x: -200,
    stagger: 0.5
});

gsap.from('.animate-project', {
    scrollTrigger: '.animate-project',
    duration: 1.5,
    opacity: 0,
    y: -200,
    stagger: 0.5,
    delay: 0.5
});

gsap.from('.animate-card', {
    scrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -200, 
    stagger: 0.5,
    delay: 0.5
});