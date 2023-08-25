const currentPage = window.location.href;

function setActiveClass(elements) {
  let isActiveSet = false;
  elements.forEach(function (element) {
    if (element.href === currentPage) {
      element.classList.add('is-active');
      isActiveSet = true;
    } else {
      element.classList.remove('is-active');
    }
  });
  if (!isActiveSet) {
    elements[0].classList.add('is-active'); // Встановлюємо активне посилання на перший елемент (Home)
  }
}

const activePage = document.querySelectorAll('nav a');
setActiveClass(activePage);

const footerActivePage = document.querySelectorAll('.nav-li-deep');
setActiveClass(footerActivePage);
