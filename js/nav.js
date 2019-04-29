//Mobile Nav

const menuSlider = document.querySelector('.menu-button')
const nav = document.querySelector('.nav-wrapper')

menuSlider.addEventListener('click', event => {;

      TweenMax.from(".nav-wrapper",1,{opacity:0, y:-200, ease:Bounce.easeOut});
      nav.classList.toggle('nav-wrapper');
      nav.classList.toggle('mobile-menu')


  });

  window.addEventListener('resize', event => {
         if (window.screen.width > 500){
          nav.classList.add('nav-wrapper');
          nav.classList.remove('mobile-menu');
         }
});