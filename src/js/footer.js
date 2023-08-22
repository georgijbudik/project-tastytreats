import Notiflix from 'notiflix';

const footFormEl = document.querySelector('.sub-form');
footFormEl.addEventListener('submit', onFormElSubmit);

const footInputEl = document.querySelector('.footer-form-email-input');
const footButtonEl = document.querySelector('.sub-btn');
const scrollToTheTop = document.querySelector('.scroll-to-the-top');
scrollToTheTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// const userEmail = event => {

//   updateLocalStorage(email.value);
// };

const updateLocalStorage = email => {
  const feedbackFormState = {
    email: email,
  };

  localStorage.setItem('email-input', JSON.stringify(feedbackFormState));
};

footInputEl.addEventListener('input', e => {
  updateLocalStorage(e.currentTarget.value);
});

// localStorage.getItem();
if (JSON.parse(localStorage.getItem('email-input')).email) {
  footInputEl.value = JSON.parse(localStorage.getItem('email-input')).email;
}

// const parsedItem = JSON.parse(getItem);
// if (parsedItem !== null) {
//   footInputEl.value = parsedItem.email;
// }

function onFormElSubmit(event) {
  const {
    elements: { email },
  } = event.currentTarget;

  event.preventDefault();

  // console.log(JSON.parse(localStorage.getItem('email-input')));

  if (email.value === '') {
    return Notiflix.Notify.failure('Please, type in the correct email');
  }

  Notiflix.Notify.success('Thank you for subscribing! Enjoy your meal!');
  event.currentTarget.reset();
  // localStorage.removeItem('email-input');
}
