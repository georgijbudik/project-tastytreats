import { renderFavoriterecipes } from './api/favorites-api';
import { renderModalByRecipe } from './pop-up';
import { createMarkup } from './createMarkupCards';
import fetchRecipeById from './api/recipe-info-api';
import SPRITE from '../images/sprite/sprite.svg';
import Notiflix from 'notiflix';

// localStorage.clear();

const deleteBtnRef = document.querySelector('.favorites-delete-recipes-btn');
const likedRecipeList = document.querySelector('.favorites-recipe-list');
const emptyPlaceholderRef = document.querySelector('.empty-meal');

const ratingModalCloseBtn = document.querySelector('[data-rating-close]');
const ratingModal = document.querySelector('[data-rating-form]');
const backdrop = document.querySelector('.popup-backdrop');
const modal = document.querySelector('.modal-recipe');
const closeModalBtn = document.querySelector('[data-action="close"]');

closeModalBtn.addEventListener('click', () => {
  closeModalPopup();
});

ratingModalCloseBtn.addEventListener('click', () => {
  ratingModal.classList.remove('is-visible');
});
const likedRecipesArray = JSON.parse(localStorage.getItem('liked-recipes'));
let uniqueLikedRecipes;

if (likedRecipesArray.length !== 0) {
  emptyPlaceholderRef.classList.add('is-hidden');
  deleteBtnRef.classList.remove('is-hidden');
}

if (!likedRecipesArray || likedRecipesArray.length === 0) {
  return;
} else {
  uniqueLikedRecipes = likedRecipesArray.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  for (const recipe of uniqueLikedRecipes) {
    renderFavoriterecipes(recipe).then(({ data }) => {
      createCards([data]);
      createRecipePopup(data);
    });
  }
}

deleteBtnRef.addEventListener('click', () => {
  localStorage.setItem('liked-recipes', JSON.stringify([]));
  emptyPlaceholderRef.classList.remove('is-hidden');
  deleteBtnRef.classList.add('is-hidden');
  likedRecipeList.innerHTML = '';
});

function closeModalPopup() {
  window.removeEventListener('mousedown', outerClickHandler);
  window.removeEventListener('keydown', escapePressHandler);
  backdrop.classList.remove('is-visible');
  document.body.style.overflow = 'auto';
}

function outerClickHandler(e) {
  if (e.target === backdrop) {
    closeModalPopup();
  }
  if (e.target === ratingModal) {
    ratingModal.classList.remove('is-visible');
  }
}

function escapePressHandler(e) {
  if (!ratingModal.classList.contains('is-visible') && e.code === 'Escape') {
    closeModalPopup();
  }
  if (ratingModal.classList.contains('is-visible') && e.code === 'Escape') {
    ratingModal.classList.remove('is-visible');
  }
}

function removeCardFromFavorite(e) {
  const cardToDelete = e.currentTarget.dataset.heart;
  document.body.style.overflow = 'hidden';
  Notiflix.Confirm.show(
    'Delete recipe',
    'Are you sure you want to delete this recipe from favorites?',
    'Yes',
    'No',
    () => {
      uniqueLikedRecipes = uniqueLikedRecipes.filter(
        recipe => recipe !== cardToDelete
      );
      if (uniqueLikedRecipes.length === 0) {
        deleteBtnRef.classList.add('is-hidden');
        emptyPlaceholderRef.classList.remove('is-hidden');
      }
      closeModalPopup();
      localStorage.setItem('liked-recipes', JSON.stringify(uniqueLikedRecipes));
      Notiflix.Block.standard('.body');
      likedRecipeList.innerHTML = '';
      for (const recipe of uniqueLikedRecipes) {
        renderFavoriterecipes(recipe).then(({ data }) => {
          createCards([data]);
          createRecipePopup(data);
        });
      }
      Notiflix.Block.remove('.body');
      document.body.style.overflow = 'auto';
    },
    () => {
      document.body.style.overflow = 'auto';
    }
  );
}

function renderMarkup(arr) {
  const markup = arr.map(createMarkup).join('');
  likedRecipeList.insertAdjacentHTML('afterbegin', markup);
}

function createCards(arr) {
  renderMarkup(arr);
  const seeRecipeBtn = document.querySelector('.js-see-recipe');
  const heartIcon = document.querySelector('.heart-svg-button');
  heartIcon.addEventListener('click', removeCardFromFavorite);
  const heartSvg = heartIcon.querySelectorAll('.svg');
  heartSvg.forEach(svg => svg.classList.add('svg-is-active'));
  seeRecipeBtn.addEventListener('click', e => {
    e.currentTarget.blur();
    backdrop.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    window.addEventListener('mousedown', outerClickHandler);
    window.addEventListener('keydown', escapePressHandler);
  });
}

function createRecipePopup(recipe) {
  const modalMarkup = renderModalByRecipe(recipe);
  modal.innerHTML = modalMarkup;
  const openRatingModalBtn = document.querySelector('[data-rating-open]');
  openRatingModalBtn.addEventListener('click', () => {
    window.addEventListener('mousedown', outerClickHandler);
    window.addEventListener('keydown', escapePressHandler);
    ratingModal.classList.add('is-visible');
  });
  // const removeFavoriteBtnRef = document.querySelector('[data-remove-favorite]');
  // removeFavoriteBtnRef.addEventListener('click', removeCardFromFavorite);
}
