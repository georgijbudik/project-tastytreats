document.addEventListener('DOMContentLoaded', function() {
    const bodyBackgroundColor = document.body;
    const desktopSwitcher = document.querySelector('.header-switch input');

    desktopSwitcher.addEventListener('change', changeToDarkTheme);
    
    function changeToDarkTheme() {
        if(desktopSwitcher.checked) {
            bodyBackgroundColor.classList.add('dark-theme');
        }else {
            bodyBackgroundColor.classList.remove('dark-theme');
        }
    }
})




