const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let index = 0;

// crear dots
slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    dot.addEventListener("click", () => {
        index = i;
        updateSlider();
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlider();
});

prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
});

// auto play
setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlider();
}, 4000);

// init
updateSlider();