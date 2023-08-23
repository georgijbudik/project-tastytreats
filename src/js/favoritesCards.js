import { renderFavoriterecipes } from './api/favorites-api';
import fetchRecipeById from './api/recipe-info-api';
import SPRITE from '../images/sprite/sprite.svg';

const deleteBtnRef = document.querySelector('.favorites-delete-recipes-btn');
const likedRecipeList = document.querySelector('.favorites-recipe-list');
const emptyPlaceholderRef = document.querySelector('.empty-meal');

const backdrop = document.querySelector('.popup-backdrop');
const modal = document.querySelector('.modal-recipe');
const closeModalBtn = document.querySelector('[data-action="close"]');

closeModalBtn.addEventListener('click', closeModal);

const likedRecipesArray = JSON.parse(localStorage.getItem('liked-recipes'));

if (likedRecipesArray.length !== 0) {
  emptyPlaceholderRef.classList.add('is-hidden');
  deleteBtnRef.classList.remove('is-hidden');
}

if (!likedRecipesArray || likedRecipesArray.length === 0) {
  return;
} else {
  const uniqueLikedRecipes = likedRecipesArray.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  console.log(uniqueLikedRecipes);

  for (const recipe of uniqueLikedRecipes) {
    renderFavoriterecipes(recipe).then(({ data }) => {
      createMarkup([data]);
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

function closeModal() {
  window.removeEventListener('mousedown', outerClickHandler);
  window.removeEventListener('keydown', escapePressHandler);
  backdrop.classList.remove('is-visible');
  document.body.style.overflow = 'auto';
}

function outerClickHandler(e) {
  if (e.target === backdrop) {
    closeModal();
  }
  // if (e.target === ratingModal) {
  //   ratingModal.classList.remove('is-visible');
  // }
}

function escapePressHandler(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
  // if (!ratingModal.classList.contains('is-visible') && e.code === 'Escape') {
  //   closeModal();
  // }
  // if (ratingModal.classList.contains('is-visible') && e.code === 'Escape') {
  //   ratingModal.classList.remove('is-visible');
  // }
}

function createMarkup(arr) {
  const markup = arr
    .map(({ preview, title, description, rating, _id }) => {
      return `<li >
                <div class="icon-heart">
              <button class="heart-svg-button " data-heart="${_id}">
              <svg height="22px" id="icon-heart" viewBox="0 0 36 32">
              <path class="svg svg-is-active" fill="none" opacity="0.9" stroke="#f8f8f8"  stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.9091" d="M15.991 6.848c-2.666-3.117-7.113-3.956-10.451-1.101-3.341 2.854-3.811 7.625-1.188 11.001 2.182 2.806 8.781 8.724 10.944 10.64 0.243 0.214 0.364 0.321 0.505 0.364 0.057 0.017 0.123 0.028 0.191 0.028s0.133-0.010 0.195-0.029l-0.005 0.001c0.141-0.042 0.262-0.15 0.505-0.364 2.163-1.916 8.762-7.834 10.943-10.64 2.624-3.375 2.211-8.177-1.187-11.001-3.398-2.825-7.785-2.016-10.451 1.101z"></path>
              </svg>
              </button>
                </div>
                <img
                  src="${preview}"
                  alt=""
                />
                <div class="description-rating-container">
                  <h3 class="title-cards">${
                    title.length > 20 ? title.slice(0, 22) + '...' : title
                  }</h3>
                  <p>${description}</p>
                  <div class="rating">
                    <p class="number js-number">${rating}</p>
                    <div class="rating-body">
                    <div class="rating-active"></div>
                    <div class="rating-items">
                      <input type="radio" class="rating-item" value="1" name="rating">
                      <input type="radio" class="rating-item" value="2" name="rating">
                      <input type="radio" class="rating-item" value="3" name="rating">
                      <input type="radio" class="rating-item" value="4" name="rating">
                      <input type="radio" class="rating-item" value="5" name="rating">
                  </div>
                  </div>
                    <div style="margin-left: auto">
                    <button class="see-recipe-button js-see-recipe" type="button" data-id="${_id}" >
                        See recipe
                    </button>
                    </div>
                  </div>
                </div>
              </li>`;
    })
    .join('');
  likedRecipeList.insertAdjacentHTML('afterbegin', markup);
  const seeRecipeBtn = document.querySelector('.js-see-recipe');
  seeRecipeBtn.addEventListener('click', e => {
    e.currentTarget.blur();
    backdrop.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    window.addEventListener('mousedown', outerClickHandler);
    window.addEventListener('keydown', escapePressHandler);
  });
}

function createRecipePopup(recipe) {
  const modalMarkup = `
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
      </ul>
  `;
  modal.innerHTML = modalMarkup;
}
