const backdrop = document.querySelector('.popup-backdrop');
const modalContent = document.querySelector('.modal-wrapper');

const openModalBtn = document.querySelector('[data-action="open"]');
const closeModalBtn = document.querySelector('[data-action="close"]');

openModalBtn.addEventListener('click', e => {
  e.currentTarget.blur();
  openModal();
});
closeModalBtn.addEventListener('click', closeModal);

function outerClickHandler(e) {
  if (e.target === backdrop) {
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
  backdrop.classList.add('is-visible');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  window.removeEventListener('mousedown', outerClickHandler);
  window.removeEventListener('keydown', escapePressHandler);
  backdrop.classList.remove('is-visible');
  document.body.style.overflow = 'auto';
}
