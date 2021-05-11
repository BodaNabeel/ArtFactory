const menuBtn = document.querySelector(".menu__btn");
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true
    } else  {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
function toggleClass() {
    let menu = document.querySelector(".header__list");
    menu.classList.toggle("toggleCls");
}