// script.js

// =========================
/* ========================================= */
/* PRELOADER */
/* ========================================= */

window.addEventListener("load", () => {

    const preloader =
    document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hidden");

        setTimeout(() => {

            preloader.style.display = "none";

        }, 800);

    }, 800);

});


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
// CUSTOM CURSOR
// =========================

const cursor =
document.querySelector('.cursor');

const follower =
document.querySelector('.cursor-follower');

if(cursor && follower){

    document.addEventListener('mousemove', e => {

        cursor.style.transform =
        `translate(${e.clientX}px, ${e.clientY}px)`;

        follower.style.transform =
        `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;

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

// =========================
// PARTICLES
// =========================

particlesJS('particles-js', {

    particles: {

        number: {
            value: 20
        },

        color: {
            value: '#d8a1ad'
        },

        shape: {
            type: 'circle'
        },

        opacity: {
            value: 0.4
        },

        size: {
            value: 4
        },

        line_linked: {

            enable: true,

            distance: 140,

            color: '#f7d9df',

            opacity: 0.4,

            width: 1
        },

        move: {

            enable: true,

            speed: 2
        }

    }

});