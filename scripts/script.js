function animate(div, text){
  console.log('dziala funkjca')
  var typed = new Typed(div, {
    strings: [
      text
    ],
    smartBackspace: false,
    typeSpeed: 30
  });
}


window.addEventListener('scroll', function(unchecked) {
    let scroll = window.pageYOffset;
    if(scroll >= 200){
      document.querySelector('.container-div').classList.add('container-animation');
    }
  });



document.querySelector('body').onload = function(){
  animate('.header-start-heading', 'Stwórzmy idealną strone dla Ciebie!')
}






