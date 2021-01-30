window.addEventListener('scroll', function() {

    let scroll = window.pageYOffset;
    
    if(scroll >= 200){
      document.querySelector('.container-div').classList.add('container-animation');
    }
    
  });

var typed = new Typed('.header-start-heading', {
  strings: [
    "Stwórzmy idealną strone dla Ciebie!"
  ],
  smartBackspace: false,
  typeSpeed: 30
});


