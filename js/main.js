const nav = document.querySelector(".nav");
const open = document.querySelector(".hamburger");
const close = document.querySelector('.close');


const openNav = () => {
    nav.style.display = "flex"
    open.style.display = 'none'
    close.style.display = 'block'
}

const closeNav = () => {
    nav.style.display = "none"
    open.style.display = 'block'
    close.style.display = 'none'

}



open.addEventListener('click', openNav);
close.addEventListener('click', closeNav)



