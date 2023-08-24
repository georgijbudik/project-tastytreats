import Notiflix from 'notiflix';

console.log(document.body.innerHTML);

const refs = {
  // openModalBtn: document.querySelector('data-orderNow-icon-open'),
  // heroOpenBtn: document.querySelector('[data-ordernow-icon-open]'),
  openModalBtn: document.querySelectorAll('[data-orderNow-icon-open]'),
  closeModalBtn: document.querySelector('[data-orderNow-close]'),
  modal: document.querySelector('.backdrop'),
  form: document.querySelector('.order-now-form'),
  name: document.querySelector('.order-now-name'),
  phone: document.querySelector('.order-now-phone'),
  email: document.querySelector('.order-now-email'),
  comment: document.querySelector('.order-now-comment'),
  closeRatingModalBtn: document.querySelector('[data-rating-close]'),
  ratingModal: document.querySelector('[data-rating-form]'),
  ratingForm: document.querySelector('.rating-modal-form'),
  ratingEmail: document.querySelector('.rating-email-modal'),
  ratingValue: document.querySelector('.rating__value'),
};

// export function openHeroModal() {
//   const modalBtn = document.querySelector('[data-ordernow-icon-open]');
//   modalBtn.addEventListener('click', openModal);
// }

function openModal() {
  window.addEventListener('mousedown', outerClickHandler);
  window.addEventListener('keydown', escapePressHandler);
  refs.modal.classList.add('is-visible');
  document.body.style.overflow = 'hidden';
}
const saveFormData = () => {
  const formData = {
    name: refs.name.value,
    phone: refs.phone.value,
    email: refs.email.value,
    comment: refs.comment.value,
  };
  localStorage.setItem('order-now', JSON.stringify(formData));
};
const loadInputData = () => {
  const savedData = localStorage.getItem('order-now');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    refs.name.value = parsedData.name;
    refs.email.value = parsedData.email;
    refs.phone.value = parsedData.phone;
    refs.comment.value = parsedData.comment;
  }
};

refs.form.addEventListener('input', saveFormData);
loadInputData();

const clearInputData = () => {
  localStorage.removeItem('order-now');
  refs.form.reset();
};

function onFormElSubmit(event) {
  event.preventDefault();
  const formData = {
    name: refs.name.value,
    phone: refs.phone.value,
    email: refs.email.value,
    comment: refs.comment.value,
  };
  if (
    refs.phone.value === '' ||
    refs.name.value === '' ||
    refs.email.value === ''
  ) {
    return Notiflix.Notify.failure('All fields must be filled in');
  }
  console.log(formData);
  Notiflix.Notify.success('Thank you for ordering!');
  clearInputData();
  closeModal();
}

function closeModal() {
  window.removeEventListener('mousedown', outerClickHandler);
  window.removeEventListener('keydown', escapePressHandler);
  refs.modal.classList.remove('is-visible');
  document.body.style.overflow = 'auto';
}

function escapePressHandler(event) {
  if (event.code === 'Escape') {
    refs.modal.classList.remove('is-visible');
    document.body.style.overflow = 'auto';
  }
}

function outerClickHandler(event) {
  if (event.target === refs.modal) {
    refs.modal.classList.remove('is-visible');
    document.body.style.overflow = 'auto';
  }
}

function openRatingModal() {
  window.addEventListener('mousedown', outerClickHandler);
  window.addEventListener('keydown', escapePressHandler);
  refs.modal.classList.add('is-visible');
}

const ratingModal = document.querySelectorAll('.rating-modal');

if (ratingModal.length > 0) {
  initRatingsModal();
}

function initRatingsModal() {
  let ratingActive, ratingValue;
  for (let index = 0; index < ratingModal.length; index++) {
    const rating = ratingModal[index];
    initRatingsModal(rating);
  }

  function initRatingsModal(rating) {
    initRatingModalVars(rating);
    setRatingModalActiveWidth();
    if (rating.classList.contains('rating__set')) {
      setRatingModal(rating);
    }
  }

  function initRatingModalVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
  }

  function setRatingModalActiveWidth(index = ratingValue.innerHTML) {
    const ratingAktiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingAktiveWidth}%`;
  }

  function setRatingModal(rating) {
    const ratingItemsModal = rating.querySelectorAll('.rating__item');
    for (let index = 0; index < ratingItemsModal.length; index++) {
      const ratingItemModal = ratingItemsModal[index];
      ratingItemModal.addEventListener('mouseenter', function (e) {
        initRatingModalVars(rating);
        setRatingModalActiveWidth(ratingItemModal.value);
      });
      ratingItemModal.addEventListener('mouseleave', function (e) {
        setRatingModalActiveWidth();
      });
      ratingItemModal.addEventListener('click', function (e) {
        initRatingModalVars(rating);

        ratingValue.innerHTML = index + 1;
        setRatingModalActiveWidth();
      });
    }
  }

  const STORAGE_KEY = 'rating-email-modal-form-state';
  // const sawedMessage = localStorage.getItem(STORAGE_KEY);
  // let item = JSON.parse(sawedMessage);

  // populateTextarea();
  function onFormSubmit(e) {
    e.preventDefault();
    if (refs.ratingEmail.value === '' || refs.ratingValue.innerHTML === '0') {
      return Notiflix.Notify.info('All fields must be filled in');
    } else {
      refs.ratingModal.classList.remove('is-visible');
      Notiflix.Notify.success('You have successfully left a rating');
      e.target.reset();
      localStorage.clear();
      item = {};
      refs.ratingValue.innerHTML = 0;
      setRatingModalActiveWidth();
    }
  }
  const saveRatingInputData = () => {
    const formData = {
      email: refs.ratingEmail.value,
      rating: refs.ratingValue.innerHTML,
      ratingWidth: ratingActive.style.width,
    };
    localStorage.setItem(
      'rating-email-modal-form-state',
      JSON.stringify(formData)
    );
  };
  const loadRatingInputData = () => {
    const savedData = localStorage.getItem('rating-email-modal-form-state');

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      refs.ratingEmail.value = parsedData.email;
      refs.ratingValue.innerHTML = parsedData.rating;
      ratingActive.style.width = parsedData.ratingWidth;
    }
  };
  loadRatingInputData();
  // function populateTextarea() {
  //   for (const key in item) {
  //     if (key === 'email') {
  //       refs.ratingEmail.value = item.email;
  //     } else if (key === 'rating') {
  //       ratingModal.innerHTML = item.rating;
  //       setRatingModalActiveWidth();
  //     }
  //   }
  // }
  refs.ratingForm.addEventListener('submit', onFormSubmit);
  refs.closeRatingModalBtn.addEventListener('click', closeModal);

  refs.ratingForm.addEventListener('input', saveRatingInputData);

  // refs[e.target.name] = e.target.value;
  // const formJSON = JSON.stringify(refs);
  // localStorage.setItem(STORAGE_KEY, formJSON);

  refs.openModalBtn.forEach(btn => {
    btn.addEventListener('click', openRatingModal);
  });
}
refs.openModalBtn.forEach(btn => {
  btn.addEventListener('click', openModal);
});
refs.closeModalBtn.addEventListener('click', closeModal);
refs.form.addEventListener('submit', onFormElSubmit);
// refs.heroOpenBtn.addEventListener('click', openModal);
