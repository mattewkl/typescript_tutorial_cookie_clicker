const COOKIE: HTMLElement = document.getElementById("cookie-clicker")
const SMALL_COOKIE_CLASS: string = 'cookie_small'
let score:number = 0
let scoreElement:HTMLElement = document.querySelector('.score')

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