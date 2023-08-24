import fetchRecipeById from './api/recipe-info-api';
import Notiflix from 'notiflix';
import { createRatingInModal } from './rating';
import SPRITE from '../images/sprite/sprite.svg';
import { likedRecipes } from './createMarkupCards';

const ratingModal = document.querySelector('[data-rating-form]');
const backdrop = document.querySelector('.popup-backdrop');
const modalRecipe = document.querySelector('.modal-recipe');

const openModalBtn = document.querySelectorAll('[data-action="open"]');
const closeModalBtn = document.querySelector('[data-action="close"]');

openModalBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    e.currentTarget.blur();
    openModal();
  });
});

closeModalBtn.addEventListener('click', closeModal);

function outerClickHandler(e) {
  if (e.target === backdrop) {
    closeModal();
  }
  if (e.target === ratingModal) {
    ratingModal.classList.remove('is-visible');
  }
}

function escapePressHandler(e) {
  if (!ratingModal.classList.contains('is-visible') && e.code === 'Escape') {
    closeModal();
  }
  if (ratingModal.classList.contains('is-visible') && e.code === 'Escape') {
    ratingModal.classList.remove('is-visible');
  }
}

export function openModal(id) {
  window.addEventListener('mousedown', outerClickHandler);
  window.addEventListener('keydown', escapePressHandler);
  document.body.style.overflow = 'hidden';
  fetchRecipeById(id).then(data => {
    Notiflix.Block.standard('.body');
    const markup = renderModalByRecipe(data);
    modalRecipe.innerHTML = markup;
    const ratings = document.querySelectorAll('.modal-recipe-info-rating');
    createRatingInModal(ratings);
    backdrop.classList.add('is-visible');
    const openRatingModalBtn = document.querySelector('[data-rating-open]');
    openRatingModalBtn.addEventListener('click', () => {
      window.addEventListener('mousedown', outerClickHandler);
      window.addEventListener('keydown', escapePressHandler);
      ratingModal.classList.add('is-visible');
    });
    const addToFavouriteBtn = document.querySelector('[data-add-favorite]');
    addToFavouriteBtn.addEventListener('click', e => {
      closeModal();
      likedRecipes.push(e.currentTarget.dataset.favorite);
      localStorage.setItem('liked-recipes', JSON.stringify(likedRecipes));
      e.currentTarget.disabled = true;
      Notiflix.Notify.info('You have added this dish to favorites');
    });
    Notiflix.Block.remove('.body');
  });
}

function closeModal() {
  window.removeEventListener('mousedown', outerClickHandler);
  window.removeEventListener('keydown', escapePressHandler);
  backdrop.classList.remove('is-visible');
  document.body.style.overflow = 'auto';
}

export function renderModalByRecipe(recipe) {
  return `
      <div class="modal-recipe-name-and-img">
        <h2 class="modal-recipe-name">${recipe.title}</h2>
        <div class="modal-recipe-video-wrapper">
           <img class="modal-recipe-img" src="${recipe.preview}" alt="${
    recipe.title
  }" style="background: linear-gradient(
      0deg,
      rgba(5, 5, 5, 0.4) 0%,
      rgba(5, 5, 5, 0.4) 100%
    ),
    url('${recipe.thumb}'), lightgray -34.64px -20px / 109.993% 120%;"/>
<a href="${
    recipe.youtube
  }" class="modal-recipe-video-youtube-button" target="_blank">
<svg class="modal-recipe-video-youtube-svg" width="40" height="40">
<use href="${SPRITE}#icon-youtube"></use>
</svg>
</a>
        </div>
      </div>

      <div class="modal-recipe-info">
        <ul class="modal-recipe-info-tag-list">
        ${
          recipe.tags.length === 0 || recipe.tags[0] === ''
            ? `<li class="modal-recipe-info-no-tag-item">Sorry, there are no tags for this dish</li>`
            : recipe.tags
                .filter(tag => tag.length > 0)
                .map(tag => {
                  return `<li class="modal-recipe-info-tag-item">#${tag}</li>`;
                })
                .join('')
        }
        </ul>
        <div class="modal-recipe-info-rating">
          <p class="modal-recipe-info-rating-points">${recipe.rating}</p>
          <div class="modal-rating-body">
            <div class="modal-rating-disabled"></div>
            <div class="modal-rating-active"></div>
            <div class="modal-rating-items">
              <input type="radio" class="modal-rating-item" value="1" name="rating">
              <input type="radio" class="modal-rating-item" value="2" name="rating">
              <input type="radio" class="modal-rating-item" value="3" name="rating">
              <input type="radio" class="modal-rating-item" value="4" name="rating">
              <input type="radio" class="modal-rating-item" value="5" name="rating">
            </div>
          </div>
                    
          <p class="modal-recipe-info-cooking-time">${recipe.time} min</p>
        </div>
      </div>

      <ul class="modal-recipe-ingredient-list">
      ${recipe.ingredients
        .map(ingredient => {
          return `
        <li class="modal-recipe-ingredient-item">
        <p class="modal-recipe-ingredient-item-name">${ingredient.name}</p>
        <p class="modal-recipe-ingredient-item-quantity">${ingredient.measure}</p>
        </li>`;
        })
        .join('')}
      </ul>

      <p class="modal-recipe-cooking-description">
      ${recipe.instructions}
      </p>

      <ul class="modal-recipe-button-list">
        <li class="modal-recipe-button-item">
          <button
          data-favorite="${recipe._id}"
          data-add-favorite
            type="button"
            class="modal-recipe-add-button modal-recipe-button"
          >
            Add to favorite
          </button>
        </li>
        <li class="modal-recipe-button-item">
          <button
            data-rating-open
            type="button"
            class="modal-recipe-rating-button modal-recipe-button"
          >
            Give rating
          </button>
        </li>
      </ul>`;
}
