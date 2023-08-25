import { renderFavoriterecipes } from './api/favorites-api';
import { createCards } from './favoritesCards';

const listOfCards = document.querySelector('.list-of-cards');
const favoriteCategoryEL = document.querySelector('.js-categories');
const allCategoriesEl = document.querySelector('.js-btn-all-categories');
let page = 1;
let limit = 6;
let category = '';
const windowWidth = window.innerWidth;
let selectedElement = null;
const likedRecipesArray = JSON.parse(localStorage.getItem('liked-recipes'));
let uniqueLikedRecipes;

export function addFavoriteCategory(category) {
  favoriteCategoryEL.insertAdjacentHTML(
    'beforeend',
    createMarkupOfFavoriteCategories(category)
  );
}

if (!likedRecipesArray || likedRecipesArray.length === 0) {
  return;
} else {
  uniqueLikedRecipes = likedRecipesArray.filter(
    (value, index, array) => array.indexOf(value) === index
  );
}

favoriteCategoryEL.addEventListener('click', handleSelectFavoriteCategory);
allCategoriesEl.addEventListener('click', handleResetFavoriteCategories);

export function handleSelectFavoriteCategory({ target }) {
  if (target.tagName !== 'LI') {
    return;
  }

  if (selectedElement) {
    selectedElement.style.color = '#0505054D';
  }

  listOfCards.innerHTML = '';
  target.style.color = '#9BB537';

  if (target.tagName === 'LI') {
    category = target.dataset.name;
    selectedElement = target;

    for (const recipe of uniqueLikedRecipes) {
      renderFavoriterecipes(recipe).then(({ data }) => {
        if (data.category === selectedElement.dataset.name) {
          createCards([data]);
        }
      });
    }
  }
}

function handleResetFavoriteCategories() {
  listOfCards.innerHTML = '';
  selectedCategoryId = null;

  for (const recipe of uniqueLikedRecipes) {
    renderFavoriterecipes(recipe).then(({ data }) => {
      createCards([data]);
    });
  }
}

function createMarkupOfFavoriteCategories(category) {
  return `<li data-name="${category}" class="categories-item">${category}</></li>`;
}
