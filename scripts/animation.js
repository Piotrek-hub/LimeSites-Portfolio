let activeDarkMode = false;
const darkModeBtn = document.querySelector('.dark-mode-test');
const navbar = document.querySelector('.navbar');
const arrows = [...document.querySelectorAll('.arrow')];
document.querySelector('.dark-mode-test').addEventListener('click', () => { 
    activeDarkMode = !activeDarkMode;
    if(activeDarkMode)
    {
        document.body.style.setProperty('--white', '#212121');
        document.body.style.setProperty('--black', '#fafafa');
        darkModeBtn.textContent = 'LightMode';
        navbar.style.boxShadow = 'none';
        arrows.forEach(arrow => {
            arrow.src = 'assets/white-arrow.png';
            arrow.classList.add('new-arrow');
        })
    }else{ 
        document.body.style.setProperty('--white', '#fafafa');
        document.body.style.setProperty('--black', '#212121');
        darkModeBtn.textContent = 'DarkMode';
        navbar.style.boxShadow = '0px 1px 100px 0px rgba(0,0,0,0.1)';
        arrows.forEach(arrow => {
            arrow.src = 'assets/arrow.svg';
        })
    }
});