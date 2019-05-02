//Mobile Nav

const menuSlider = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-wrapper');
let state = false;

menuSlider.addEventListener('click', event => {

    TweenMax.from(".nav-wrapper", 1, { opacity: 0, y: -200, ease: Bounce.easeOut });

    nav.classList.toggle('nav-wrapper');
    nav.classList.toggle('mobile-menu')


});

window.addEventListener('resize', event => {

    if (window.innerWidth === 501) {
        nav.classList.add('nav-wrapper');
        nav.classList.remove('mobile-menu');
        location.reload()
    }


});


function refreshDiv(divId) {
    var curDivContent = document.getElementsByClassName(divId).innerHTML;
    console.log(document.getElementsByClassName(divId).innerHTML)
    document.getElementsByClassName(divId).innerHTML = curDivContent;
    console.log('execute')

}