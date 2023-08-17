var COOKIE = document.getElementById("cookie-clicker");
var SMALL_COOKIE_CLASS = 'cookie_small';
var SHOP = document.querySelector('.shop');
var OPEN_SHOP_BUTTON = document.querySelector('.header__button');
var score = 0;
var scoreElement = document.querySelector('.score');
function toggleShop() {
    SHOP.classList.toggle('shop_open');
}
function cookieClickHandler() {
    console.log('click');
}
function incrementScore() {
    score += 1;
    scoreElement.textContent = "Score: ".concat(score);
}
function cookieMouseUpHandler(event) {
    if (event.target === event.currentTarget) {
        toggleCookieClasses();
        incrementScore();
    }
}
function cookieMouseDownHandler(event) {
    toggleCookieClasses();
}
function toggleCookieClasses() {
    COOKIE.classList.toggle(SMALL_COOKIE_CLASS);
}
// COOKIE.addEventListener('click',cookieClickHandler)
COOKIE.addEventListener('mousedown', cookieMouseDownHandler);
COOKIE.addEventListener('mouseup', cookieMouseUpHandler);
OPEN_SHOP_BUTTON.addEventListener('click', toggleShop);
