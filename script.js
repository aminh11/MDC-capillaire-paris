// script.js



// =========================
// MENU MOBILE
// =========================

const menuToggle =
document.getElementById('menuToggle');

const navLinks =
document.getElementById('navLinks');

if(menuToggle){

    menuToggle.addEventListener('click', () => {

        navLinks.classList.toggle('active');

    });

}


// =========================
// FORMATION SLIDER
// =========================

const slides =
document.querySelectorAll('.slide');

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove('active');

    });

    slides[index].classList.add('active');
}

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 3000);
