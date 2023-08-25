import { Loading } from 'notiflix';
import { renderFavoriterecipes } from './api/favorites-api';
import { createCards } from './favoritesCards';

const scrollToTheTop = document.querySelector('.scroll-to-the-top-btn');
const trackEl = document.querySelector('.header');
scrollToTheTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

const listOfCards = document.querySelector('.list-of-cards');
const favoriteCategoryEL = document.querySelector('.js-favorite-categories');
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
  allCategoriesEl.style.display = 'block';
  uniqueLikedRecipes = likedRecipesArray.filter(
    (value, index, array) => array.indexOf(value) === index
  );
}

favoriteCategoryEL.addEventListener('click', handleSelectFavoriteCategory);
allCategoriesEl.addEventListener('click', handleResetFavoriteCategories);

export function handleSelectFavoriteCategory({ target }) {
  // target.blur();
  if (target.tagName !== 'BUTTON') {
    return;
  }

  if (selectedElement) {
    // selectedElement.style.backgroundColor = 'inherit';
  }

  listOfCards.innerHTML = '';
  // target.style.backgroundColor = '#9BB537';

  if (target.tagName === 'BUTTON') {
    category = target.dataset.name;
    selectedElement = target;

    for (const recipe of uniqueLikedRecipes) {
      renderFavoriterecipes(recipe).then(({ data }) => {
        if (data.category === selectedElement.dataset.name) {
          Loading.standard('Loading...');
          createCards([data]);
          Loading.remove();
        }
      });
    }
  }
}

function handleResetFavoriteCategories() {
  listOfCards.innerHTML = '';
  // selectedCategoryId = '';

  for (const recipe of uniqueLikedRecipes) {
    renderFavoriterecipes(recipe).then(({ data }) => {
      Loading.standard('Loading...');
      createCards([data]);
      Loading.remove();
    });
  }
}

function createMarkupOfFavoriteCategories(category) {
  return `<li>
  <button data-name="${category}" class="categories-item favorites-btn">${category}</button>
  </li>`;
}

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
  if (!isElementInViewport(trackEl)) {
    scrollToTheTop.classList.add('is-visible');
  } else {
    scrollToTheTop.classList.remove('is-visible');
  }
});
