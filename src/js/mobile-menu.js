const mobMenuBtn = document.querySelector('.mobile-menu-btn');
const mobMenuCloseBtn = document.querySelector('.mobile-menu-btn-close');
const mobileMenu = document.querySelector('.mobile-menu');

mobMenuBtn.addEventListener('click', function() {
  mobileMenu.classList.toggle('open');
});

mobMenuCloseBtn.addEventListener('click', function() {
  mobileMenu.classList.remove('open');
});
