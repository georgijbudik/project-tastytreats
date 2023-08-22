const currentPage = window.location.href;

const activePage = document.querySelectorAll('nav a');

activePage.forEach(function(isActive){
    if(isActive.href === currentPage){
        isActive.classList.add('is-active')
    }
})

const footerActivePage = document.querySelectorAll('.nav-li-deep');

footerActivePage.forEach(function(isActive){
    if(isActive.href === currentPage){
        isActive.classList.add('is-active')
    }
})
console.log(footerActivePage);