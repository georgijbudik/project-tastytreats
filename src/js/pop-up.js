const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.modal-wrapper');

const openModalBtn = document.querySelector('[data-action="open"]');
const closeModalBtn = modal.querySelector('[data-action="close"]');

openModalBtn.addEventListener('click', function () {
  modal.classList.toggle('is-hidden');
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', escapePressHandler);
});

closeModalBtn.addEventListener('click', function () {
  modal.classList.toggle('is-hidden');
  document.body.style.overflow = 'auto';
  window.removeEventListener('keydown', escapePressHandler);
});

window.addEventListener('mousedown', function (event) {
  if (event.target !== modal) {
    return;
  }

  modal.classList.toggle('is-hidden');
  document.body.style.overflow = 'auto';
  window.removeEventListener('keydown', escapePressHandler);
});

function escapePressHandler(e) {
  if (e.key !== 'Escape') {
    return;
  }

  modal.classList.toggle('is-hidden');
  window.removeEventListener('keydown', escapePressHandler);
  document.body.style.overflow = 'auto';
}
