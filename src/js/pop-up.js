const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.modal-wrapper');

const openModalBtn = document.querySelector('[data-action="open"]');
const closeModalBtn = modal.querySelector('[data-action="close"]');

openModalBtn.addEventListener('click', function () {
  modal.classList.toggle('is-hidden');
  document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', function () {
  modal.classList.toggle('is-hidden');
  document.body.style.overflow = 'auto';
});

window.addEventListener('mousedown', function (event) {
  if (event.target === modal) {
    modal.classList.toggle('is-hidden');
    document.body.style.overflow = 'auto';
  }
});
