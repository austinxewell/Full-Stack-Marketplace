const menuBtnEl = document.getElementById('menu-btn');
const navPageEl = document.getElementById('nav-page')
let menuOpen = false;

menuBtnEl.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtnEl.classList.toggle("open");
        navPageEl.classList.toggle('open');
        menuOpen = true;
    } else {
        menuBtnEl.classList.toggle("open");
        navPageEl.classList.toggle('open');
        menuOpen = false;
    }
})

menuBtnEl.addEventListener('blur', () => {
    if (!menuOpen) {
        menuBtnEl.classList.toggle("open");
        navPageEl.classList.toggle('open');
        menuOpen = true;
    } else {
        menuBtnEl.classList.toggle("open");
        navPageEl.classList.toggle('open');
        menuOpen = false;
    }
})