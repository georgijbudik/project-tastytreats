import { fetchCategories } from './api/categories-api';
import { categorsCards } from './api/gallery-api';
import { tuiPagination } from './pagination';
import { clickCardHeartIcon } from './createMarkupCards';
import { render } from './renderCards';
import { openModal } from './pop-up';
import { createRating } from './rating';
import { renderGalleryCard } from './createMarkupCards';

const listOfCategories = document.querySelector('.js-categories');
const btnAllCategories = document.querySelector('.js-btn-all-categories');
const listOfCards = document.querySelector('.list-of-cards');

let page = 1;
let limit = 6;
let selectedCategoryId = null;
let category = '';
const windowWidth = window.innerWidth;
let clickModal = '';
let selectedElement = null;

btnAllCategories.addEventListener('click', handleResetCategory);
listOfCategories.addEventListener('click', handleSelectCategory);

function handleSelectCategory(evt) {
  if (evt.target.tagName !== 'LI') {
    return;
  }
  if (selectedElement) {
    selectedElement.style.color = '#0505054D';
  }
  listOfCards.innerHTML = '';
  evt.target.style.color = '#9BB537';
  if (evt.target.tagName === 'LI') {
    selectedCategoryId = evt.target.dataset.id;
    category = evt.target.dataset.name;
    selectedElement = evt.target;
    if (windowWidth < 768) {
      categorsCards(category, page, limit)
        .then(data => {
          const totalItems = data.results.length * data.totalPages;
          renderGalleryCard(data.results);
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
          renderGalleryCard(data.results);
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
          renderGalleryCard(data.results);
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

export function clickBtnModal() {
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
  <li data-id="${_id}" data-name="${name}" class="categories-item">${name}</></li>`
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
