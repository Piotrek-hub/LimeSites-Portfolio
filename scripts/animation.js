let activeDarkMode = false;

document.querySelector('.dark-mode-test').addEventListener('click', () => { 
    activeDarkMode = !activeDarkMode;
    if(activeDarkMode)
    {
        document.body.style.setProperty('--white', '#212121');
        document.body.style.setProperty('--black', '#fafafa');
        document.querySelector('.dark-mode-test').textContent = 'LightMode';
        document.querySelector('.navbar').style.boxShadow = 'none';
    }else{ 
        document.body.style.setProperty('--white', '#fafafa');
        document.body.style.setProperty('--black', '#212121');
        document.querySelector('.dark-mode-test').textContent = 'DarkMode';
    }
});