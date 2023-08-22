import Notiflix from 'notiflix';

const footFormEl = document.querySelector('.sub-form');
footFormEl.addEventListener('submit', onFormElSubmit);

const footInputEl = document.querySelector('.footer-form-email-input');
const footButtonEl = document.querySelector('.sub-btn');

// const userEmail = event => {

//   updateLocalStorage(email.value);
// };

const saveInputData = () => {
  const formData = {
    email: footInputEl.value,
  };
  localStorage.setItem('email-input', JSON.stringify(formData));
};
const loadInputData = () => {
  const savedData = localStorage.getItem('email-input');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    footInputEl.value = parsedData.email;
  }
};
// loadInputData();
footInputEl.addEventListener('input', saveInputData);
loadInputData();
const clearInputData = () => {
  localStorage.removeItem('email-input');
  footInputEl.value = '';
};
// localStorage.getItem();
// footInputEl.value = JSON.parse(localStorage.getItem('email-input')).email;
// const parsedItem = JSON.parse(getItem);
// if (parsedItem !== null) {
//   footInputEl.value = parsedItem.email;
// }

function onFormElSubmit(event) {
  event.preventDefault();
  // console.log(JSON.parse(localStorage.getItem('email-input')));

  if (footInputEl.value === '') {
    return Notiflix.Notify.failure('Please, type in the correct email');
  }
  saveInputData();
  Notiflix.Notify.success('Thank you for subscribing! Enjoy your meal!');
  clearInputData(); // localStorage.removeItem('email-input');
}

const trackElement = document.querySelector('.pagination');
const scrollToTheTop = document.querySelector('.scroll-to-the-top-btn');
scrollToTheTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', () => {
  if (isElementInViewport(trackElement)) {
    scrollToTheTop.classList.add('is-visible');
  } else {
    scrollToTheTop.classList.remove('is-visible');
  }
});
