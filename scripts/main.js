const cover = document.querySelector('.mobile-menu__cover');
const btn = document.querySelector('.mobile-menu__btn');
const home = document.querySelector('#global-home');

btn.addEventListener("click", () => {
    home.classList.toggle('menu-open');
});

cover.addEventListener("click", () => {
    home.classList.toggle('menu-open');
});