const currentPage = window.location.href;

function setActiveClass(elements) {
  elements.forEach(function (element) {
    if (element.href === currentPage) {
      element.classList.add('is-active');
    }
  });
}

const activePage = document.querySelectorAll('nav a');
setActiveClass(activePage);

const footerActivePage = document.querySelectorAll('.nav-li-deep');
setActiveClass(footerActivePage);
