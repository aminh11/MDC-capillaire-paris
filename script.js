// script.js

// =========================
/* ========================================= */
/* PRELOADER */
/* ========================================= */

// =========================================
/* PRELOADER */
/* ========================================= */

window.addEventListener("load", () => {

    const preloader =
    document.getElementById("preloader");

    // MOBILE

    if(window.innerWidth <= 768){

        preloader.style.display = "none";

        return;
    }

    // PC

    setTimeout(() => {

        preloader.classList.add("hidden");

        setTimeout(() => {

            preloader.style.display = "none";

        }, 300);

    }, 300);

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
