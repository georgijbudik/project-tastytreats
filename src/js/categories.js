import { fetchCategories } from './api/categories-api';
import Notiflix from 'notiflix';

const listOfCategories = document.querySelector('.js-categories');
const btnAllCategories = document.querySelector('.js-btn-all-categories');

btnAllCategories.addEventListener('click', handleResetCategory);
listOfCategories.addEventListener('click', handleSelectCategory);

let selectedCategoryId = null;

function handleSelectCategory(evt) {
  if (evt.target.tagName === 'BUTTON') {
    selectedCategoryId = evt.target.dataset.id;
    const category = evt.target.name;
    console.log(category);

    // Викликається функція запиту за певною категорією
    // fetchCategoryCards(category)
    //   .then(data => {
    //     listofCards.insertAdjacentHTML(
    //       'beforeend',
    //       createCards(selectedCategoryId)
    //     );
    //     // шаблон картки винести в окремий файл
    //   })
    //   .catch(error => console.log(error.message));
  }
}

function handleResetCategory(evt) {
  if (!selectedCategoryId) {
    return;
  }

  selectedCategoryId = null;
  // Викликається функція запиту відмальовки карточок по всіх категоріях
  // listofCards.innerHTML = '';
}

const createMarkupOfCategories = arr => {
  return arr
    .map(
      ({ _id, name }) => `
  <li><button data-id="${_id}" name="${name}">${name}</button></li>`
    )
    .join('');
};

const fetchAllCategories = () => {
  fetchCategories()
    .then(response => {
      const { data } = response;

      listOfCategories.insertAdjacentHTML(
        'beforeend',
        createMarkupOfCategories(data)
      );
    })
    .catch(error => {
      Notiflix.Notify.failure(
        `Categories is not defined. ${error.message}. Try again`
      );
      console.log(error.message);
    });
};

fetchAllCategories();
