let menu = document.getElementById('menu')
let burger = document.getElementById('burger')
let closeButton = document.getElementById('close')
let home = document.getElementById('menuHome')
let shop = document.getElementById('menuShop')
let about = document.getElementById('menuAbout')
let contact = document.getElementById('menuContact')
let prev =  document.getElementById('prev')
let next = document.getElementById('next')
let slide = document.getElementsByClassName('slide')

let position = 0

function toggleMenu(){
    menu.classList.toggle('toggle')
}
function toggleSlideNext(){
    
    switch(position){
        case 0: 
            slide[0].classList.toggle('toggle')
            slide[1].classList.toggle('toggle')
            position++
            break;
        case 1: 
            slide[1].classList.toggle('toggle')
            slide[2].classList.toggle('toggle')
            position++
            break;
        case 2:
            slide[2].classList.toggle('toggle')
            slide[0].classList.toggle('toggle')
            position=0
            break;
    }
}
function toggleSlidePrev(){
    
    switch(position){
        case 0: 
            slide[0].classList.toggle('toggle')
            slide[2].classList.toggle('toggle')
            position=2
            break;
        case 1: 
            slide[1].classList.toggle('toggle')
            slide[0].classList.toggle('toggle')
            position--
            break;
        case 2:
            slide[2].classList.toggle('toggle')
            slide[1].classList.toggle('toggle')
            position--
            break;
    }
}

burger.addEventListener('click', toggleMenu)
closeButton.addEventListener('click', toggleMenu)
home.addEventListener('click', toggleMenu)
shop.addEventListener('click', toggleMenu)
about.addEventListener('click', toggleMenu)
contact.addEventListener('click', toggleMenu)
next.addEventListener('click',toggleSlideNext)
prev.addEventListener('click',toggleSlidePrev)

