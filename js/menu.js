const btn = document.querySelector(".menu-mobile");
const menu = document.querySelector(".navbar ul");

btn?.addEventListener("click", () => {
menu.classList.toggle("active");
});