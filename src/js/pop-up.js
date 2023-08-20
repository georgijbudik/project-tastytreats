const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.modal-wrapper');

const openModalBtn = document.querySelector('[data-action="open"]');
const closeModalBtn = modal.querySelector('[data-action="close"]');

openModalBtn.addEventListener('click', e => {
  e.currentTarget.blur();
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
  window.addEventListener('mousedown', outerClickHandler);
  window.addEventListener('keydown', escapePressHandler);
  modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  window.removeEventListener('mousedown', outerClickHandler);
  window.removeEventListener('keydown', escapePressHandler);
  modal.classList.add('is-hidden');
  document.body.style.overflow = 'auto';
}
