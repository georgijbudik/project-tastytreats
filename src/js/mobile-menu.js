const mobMenuBtnOpen = document.querySelector('.mobile-menu-btn');
const mobMenuCloseBtn = document.querySelector('.mobile-menu-btn-close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileBodyScroll = document.body; 

mobMenuBtnOpen.addEventListener('click', function() {
  mobileMenu.classList.add('open');
  mobileBodyScroll.classList.add('no-scroll')  
});

mobMenuCloseBtn.addEventListener('click', function() {
  mobileMenu.classList.remove('open');
  mobileBodyScroll.classList.remove('no-scroll')
});
