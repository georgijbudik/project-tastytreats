const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.modal-wrapper');

const openModalBtn = document.querySelector('[data-action="open"]');
const closeModalBtn = modal.querySelector('[data-action="close"]');

function escapePressHandler(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

openModalBtn.addEventListener('click', function () {
  this.blur();
  document.addEventListener('keydown', escapePressHandler);
  modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('mousedown', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

function closeModal() {
  document.removeEventListener('keydown', escapePressHandler);
  modal.classList.add('is-hidden');
  document.body.style.overflow = 'auto';
}
