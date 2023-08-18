const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.modal-wrapper');

const openModalBtn = document.querySelector('[data-action="open"]');
const closeModalBtn = modal.querySelector('[data-action="close"]');

openModalBtn.addEventListener('click', () => {
  this.blur();
  openModal();
});
closeModalBtn.addEventListener('click', closeModal);

function outerClickHandler(e) {
  if (e.target === modal) {
    closeModal();
  }
}

function escapePressHandler(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function openModal() {
  document.addEventListener('mousedown', outerClickHandler);
  document.addEventListener('keydown', escapePressHandler);
  modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.removeEventListener('mousedown', outerClickHandler);
  document.removeEventListener('keydown', escapePressHandler);
  modal.classList.add('is-hidden');
  document.body.style.overflow = 'auto';
}
