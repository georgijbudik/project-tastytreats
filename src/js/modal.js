import Notiflix from 'notiflix';

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-orderNow-open]'),
    openModalIcon: document.querySelector('[data-orderNow-icon-open]'),
    closeModalBtn: document.querySelector('[data-orderNow-close]'),
    modal: document.querySelector('[data-orderNow]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.openModalIcon.addEventListener('click', openModal);

  function openModal() {
    window.addEventListener('mousedown', outerClickHandler);
    window.addEventListener('keydown', escapePressHandler);
    refs.modal.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
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

  const refsData = {
    form: document.querySelector('.order-now-form'),
    name: document.querySelector('.order-now-name'),
    phone: document.querySelector('.order-now-phone'),
    email: document.querySelector('.order-now-email'),
    comment: document.querySelector('.order-now-comment'),
  };

  const STORAGE_KEY = 'order-now-form-state';
  const formData = {};
  const sawedMessage = localStorage.getItem(STORAGE_KEY);
  let item = JSON.parse(sawedMessage);

  refsData.form.addEventListener('submit', onFormSubmit);

  refsData.form.addEventListener('input', e => {
    for (const key in item) {
      if (
        key === 'phone' ||
        key === 'name' ||
        key === 'email' ||
        key === 'comment'
      ) {
        formData.phone = item.phone;
        formData.comment = item.comment;
        formData.email = item.email;
        formData.name = item.name;
      }
    }
    formData[e.target.name] = e.target.value;
    const formJSON = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formJSON);
  });

  populateTextarea();

  function onFormSubmit(e) {
    e.preventDefault();
    if (
      refsData.phone.value === '' ||
      refsData.name.value === '' ||
      refsData.email.value === ''
    ) {
      Notiflix.Notify.info('Всі поля мають бути заповненими');
    } else {
      e.target.reset();
      localStorage.clear();
      item = {};
    }
  }

  function populateTextarea() {
    for (const key in item) {
      if (
        key === 'name' ||
        key === 'email' ||
        key === 'phone' ||
        key === 'feedback'
      ) {
        refsData.name.value = item.name;
        refsData.email.value = item.email;
        refsData.phone.value = item.phone;
        refsData.comment.value = item.feedback;
      }
    }
  }
})();

(() => {
  const refs = {
    // openModalBtn: document.querySelector('[data-rating-open]'),
    closeModalBtn: document.querySelector('[data-rating-close]'),
    modal: document.querySelector('[data-rating-form]'),
  };

  refs.closeModalBtn.addEventListener('click', closeModal);
  //   refs.openModalBtn.addEventListener('click', openRatingModal);

  function openRatingModal() {
    window.addEventListener('mousedown', outerClickHandler);
    window.addEventListener('keydown', escapePressHandler);
    refs.modal.classList.add('is-visible');
  }

  function closeModal() {
    window.removeEventListener('mousedown', outerClickHandler);
    window.removeEventListener('keydown', escapePressHandler);
    refs.modal.classList.remove('is-visible');
  }

  function escapePressHandler(event) {
    if (event.code === 'Escape') {
      refs.modal.classList.remove('is-visible');
    }
  }

  function outerClickHandler(event) {
    if (event.target === refs.modal) {
      refs.modal.classList.remove('is-visible');
    }
  }
})();

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
  const refsData = {
    form: document.querySelector('.rating-modal-form'),
    email: document.querySelector('.rating-email-modal'),
    rating: document.querySelector('.rating__value'),
  };
  const modal = document.querySelector('[data-rating-form]');

  const STORAGE_KEY = 'rating-email-modal-form-state';
  const formData = {};
  const sawedMessage = localStorage.getItem(STORAGE_KEY);
  let item = JSON.parse(sawedMessage);

  refsData.form.addEventListener('submit', onFormSubmit);

  refsData.form.addEventListener('input', e => {
    for (const key in item) {
      if (key === 'email' || key === 'rating') {
        formData.email = item.email;
        formData.rating = item.rating;
      }
    }
    formData[e.target.name] = e.target.value;
    const formJSON = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formJSON);
  });

  populateTextarea();

  function onFormSubmit(e) {
    e.preventDefault();
    if (refsData.email.value === '' || refsData.rating.innerHTML === '0') {
      return Notiflix.Notify.info('Всі поля мають бути заповненими');
    } else {
      modal.classList.remove('is-visible');
      console.log(formData);
      e.target.reset();
      localStorage.clear();
      item = {};
      refsData.rating.innerHTML = 0;
      setRatingModalActiveWidth();
    }
  }

  function populateTextarea() {
    for (const key in item) {
      if (key === 'email') {
        refsData.email.value = item.email;
      } else if (key === 'rating') {
        refsData.rating.innerHTML = item.rating;
        setRatingModalActiveWidth();
      }
    }
  }
}
