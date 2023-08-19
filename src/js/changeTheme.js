document.addEventListener('DOMContentLoaded', function() {
    const bodyBackgroundColor = document.body;
    const desktopSwitcher = document.querySelector('.header-switch input');
    const mobileSwitcher = document.querySelector('.switch input')

    desktopSwitcher.addEventListener('change', changeToDarkTheme);

    function changeToDarkTheme() {
        if(desktopSwitcher.checked) {
            bodyBackgroundColor.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark')
        }else {
            bodyBackgroundColor.classList.remove('dark-theme');
            desktopSwitcher.classList.add('dark-theme');
            localStorage.setItem('theme', 'light')
        }
    }

    mobileSwitcher.addEventListener('change', mobileToDarkTheme);

    function mobileToDarkTheme() {
        if(mobileSwitcher.checked) {
            bodyBackgroundColor.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark')
        }else {
            bodyBackgroundColor.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light')
        } 
    }

    function themeReload() {
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme === 'dark'){
            desktopSwitcher.checked = true;
            mobileSwitcher.checked = true;
            bodyBackgroundColor.classList.add('dark-theme');
        }else {
            desktopSwitcher.checked = false;
            mobileSwitcher.checked = false;
            bodyBackgroundColor.classList.remove('dark-theme');
        }
    }

    themeReload();

    window.addEventListener('pageshow', function(event) {
        themeReload();
    })

})




