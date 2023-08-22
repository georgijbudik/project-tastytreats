const currentPage = window.location.href;

const activePage = document.querySelectorAll('nav a');

activePage.forEach(function(isActive){
    if(isActive.href === currentPage){
        isActive.classList.add('is-active')
    }
})