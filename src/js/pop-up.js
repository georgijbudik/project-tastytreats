import fetchRecipeById from './api/recipe-info-api';
import { clickModal } from './renderCards';
import Notiflix from 'notiflix';

const ratingModal = document.querySelector('[data-rating-form]');
const backdrop = document.querySelector('.popup-backdrop');
const modalRecipe = document.querySelector('.modal-recipe');
const modalWrapper = document.querySelector('.modal-wrapper');

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
    Notiflix.Block.init({
      backgroundColor: 'transparent',
    });
    Notiflix.Block.standard('.popup-backdrop');
    renderModalByRecipe(data);
    backdrop.classList.add('is-visible');
    const openRatingModalBtn = document.querySelector('[data-rating-open]');
    openRatingModalBtn.addEventListener('click', () => {
      window.addEventListener('mousedown', outerClickHandler);
      window.addEventListener('keydown', escapePressHandler);
      ratingModal.classList.add('is-visible');
    });
    Notiflix.Block.remove('.popup-backdrop');
  });
}

function closeModal() {
  window.removeEventListener('mousedown', outerClickHandler);
  window.removeEventListener('keydown', escapePressHandler);
  backdrop.classList.remove('is-visible');
  document.body.style.overflow = 'auto';
}

fetchRecipeById('6462a8f74c3d0ddd28898040').then(renderModalByRecipe);
// fetchRecipeById(idPopularRecipes[0]).then(renderModalByRecipe);

// export function renderModal(e) {
//   if (e.target.classList.contains('js-see-recipe')) {
//     // const jsSeeRecipeBtnRef = document.querySelector('[data-id]');
//     jsSeeRecipeBtnRef.addEventListener('click', e => {
//       console.log(clickModal);
//       fetchRecipeById(clickModal).then(renderModalByRecipe);
//     });
//   }
// }

function renderModalByRecipe(recipe) {
  const markup = `
      <div class="modal-recipe-name-and-img">
        <h2 class="modal-recipe-name">${recipe.title}</h2>
        <img class="modal-recipe-img" src="${recipe.preview}" alt="${
    recipe.title
  }" style="background: linear-gradient(
      0deg,
      rgba(5, 5, 5, 0.4) 0%,
      rgba(5, 5, 5, 0.4) 100%
    ),
    url('${recipe.thumb}'), lightgray -34.64px -20px / 109.993% 120%;"/>
      </div>

      <div class="modal-recipe-info">
        <ul class="modal-recipe-info-tag-list">
        ${recipe.tags
          .map(tag => {
            return tag !== ''
              ? `<li class="modal-recipe-info-tag-item">#${tag}</li>`
              : `<p class="modal-recipe-info-no-tag-item">Sorry, there are no tags for this dish</p>`;
          })
          .join('')}
        </ul>
        <div class="modal-recipe-info-rating">
          <p class="modal-recipe-info-rating-points">${recipe.rating}</p>
          <ul class="modal-recipe-info-rating-stars-list">
            <li class="modal-recipe-info-rating-star">
              <svg class="modal-recipe-info-rating-star-svg" viewBox="0 0 32 32">
                <path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
              </svg>
            </li>
            <li class="modal-recipe-info-rating-star">
              <svg class="modal-recipe-info-rating-star-svg" viewBox="0 0 32 32">
                <path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
              </svg>
            </li>
            <li class="modal-recipe-info-rating-star">
              <svg class="modal-recipe-info-rating-star-svg" viewBox="0 0 32 32">
                <path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
              </svg>
            </li>
            <li class="modal-recipe-info-rating-star">
              <svg class="modal-recipe-info-rating-star-svg" viewBox="0 0 32 32">
                <path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
              </svg>
            </li>
            <li class="modal-recipe-info-rating-star">
              <svg class="modal-recipe-info-rating-star-svg" viewBox="0 0 32 32">
                <path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
              </svg>
            </li>
          </ul>
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
  modalRecipe.innerHTML = markup;
}
