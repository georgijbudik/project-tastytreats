import { fetchCategories } from './api/categories-api';
import { categorsCards } from './api/gallery-api';
import { pageCards } from './api/gallery-api';
import Notiflix from 'notiflix';
import { tuiPagination } from './pagination';
import { createMarkup, clickCardHeartIcon } from './createMarkupCards';
import { render } from './renderCards';
import { openModal } from './pop-up';
import { createRating } from './rating';

const listOfCategories = document.querySelector('.js-categories');
const btnAllCategories = document.querySelector('.js-btn-all-categories');
const listOfCards = document.querySelector('.list-of-cards');

let page = 1;
let limit = 6;
let selectedCategoryId = null;
let category = '';
const windowWidth = window.innerWidth;
let clickModal = '';

btnAllCategories.addEventListener('click', handleResetCategory);
listOfCategories.addEventListener('click', handleSelectCategory);

function handleSelectCategory(evt) {
  listOfCards.innerHTML = '';
  if (evt.target.tagName === 'LI') {
    selectedCategoryId = evt.target.dataset.id;
    category = evt.target.dataset.name;
    if (windowWidth < 768) {
      categorsCards(category, page, limit)
        .then(data => {
          const totalItems = data.results.length * data.totalPages;
          createMarkup(data.results);
          console.log(createMarkup);
          tuiPagination(category, totalItems, limit, 2);
          clickBtnModal();
          const ratings = document.querySelectorAll('.rating');
          createRating(ratings);
          clickCardHeartIcon();
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else if (windowWidth < 1280) {
      limit = 8;
      categorsCards(category, page, limit)
        .then(data => {
          const totalItems = data.results.length * data.totalPages;
          createMarkup(data.results);
          tuiPagination(category, totalItems, limit, 3);
          clickBtnModal();
          const ratings = document.querySelectorAll('.rating');
          createRating(ratings);
          clickCardHeartIcon();
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      limit = 9;
      categorsCards(category, page, limit)
        .then(data => {
          const totalItems = data.results.length * data.totalPages;
          createMarkup(data.results);
          tuiPagination(category, totalItems, limit, 3);
          clickBtnModal();
          const ratings = document.querySelectorAll('.rating');
          createRating(ratings);
          clickCardHeartIcon();
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }
}

function clickBtnModal() {
  const jsSeeRecipeBtnRef = document.querySelectorAll('.js-see-recipe');
  jsSeeRecipeBtnRef.forEach(btn => {
    btn.addEventListener('click', e => {
      clickModal = e.target.dataset.id;
      openModal(clickModal);
    });
  });
}

function handleResetCategory() {
  listOfCards.innerHTML = '';
  selectedCategoryId = null;
  render();
}

const createMarkupOfCategories = arr => {
  return arr
    .map(
      ({ _id, name }) => `
  <li data-id="${_id}" data-name="${name}">${name}</></li>`
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
      console.log(error.message);
    });
};

fetchAllCategories();
