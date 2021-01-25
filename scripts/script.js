window.addEventListener('scroll', function() {

    let scroll = window.pageYOffset;
    
    if(scroll >= 200){
      document.querySelector('.container-div').classList.add('container-animation');
    }
    
  });

