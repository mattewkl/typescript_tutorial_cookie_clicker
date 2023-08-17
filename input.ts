const COOKIE: HTMLElement = document.getElementById("cookie-clicker")
const SMALL_COOKIE_CLASS: string = 'cookie_small'
const SHOP:HTMLElement = document.querySelector('.shop')
const OPEN_SHOP_BUTTON:HTMLElement = document.querySelector('.header__button')
let score:number = 0
let scoreElement:HTMLElement = document.querySelector('.score')


function toggleShop():void {
    SHOP.classList.toggle('shop_open')
}



function cookieClickHandler(): void {
    console.log('click')
}


function incrementScore():void {
    score += 1
    scoreElement.textContent = `Score: ${score}`
}

function cookieMouseUpHandler(event): void {
    if (event.target === event.currentTarget) {
        toggleCookieClasses()
        incrementScore()
    }
}

function cookieMouseDownHandler(event): void {
    toggleCookieClasses()
}

function toggleCookieClasses(): void {
    COOKIE.classList.toggle(SMALL_COOKIE_CLASS)
}

// COOKIE.addEventListener('click',cookieClickHandler)
COOKIE.addEventListener('mousedown', cookieMouseDownHandler)
COOKIE.addEventListener('mouseup', cookieMouseUpHandler)

OPEN_SHOP_BUTTON.addEventListener('click', toggleShop)