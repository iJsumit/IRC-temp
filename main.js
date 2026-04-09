const slides = document.querySelectorAll("#heroSlider .slide");
let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? "1" : "0";
    });
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}

document.getElementById("nextSlide").onclick = nextSlide;
document.getElementById("prevSlide").onclick = prevSlide;

setInterval(nextSlide, 5000);

// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => menu.classList.toggle('hidden'));

// Tabbed Interface Logic for Global Partners
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    // Sabhi tab content hide karo
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Sabhi tab buttons se active class hatao
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Current tab dikhao aur button active karo
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Testimonial Slider Logic
// let currentSlide = 0;
// const tslides = document.querySelectorAll('.testimonial-slide');

// function showSlide(index) {
//     tslides.forEach((slide, i) => {
//         slide.classList.remove('active');
//         if (i === index) slide.classList.add('active');
//     });
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % tslides.length;
//     showSlide(currentSlide);
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + tslides.length) % tslides.length;
//     showSlide(currentSlide);
// }