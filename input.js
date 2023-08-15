var COOKIE = document.getElementById("cookie-clicker");
var SMALL_COOKIE_CLASS = 'cookie_small';
var score = 0;
var scoreElement = document.querySelector('.score');
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
