import { renderFavoriterecipes } from './api/favorites-api';

const deleteBtnRef = document.querySelector('.favorites-delete-recipes-btn');
const likedRecipeList = document.querySelector('.favorites-recipe-list');
const emptyPlaceholderRef = document.querySelector('.empty-meal');

const likedRecipesArray = JSON.parse(localStorage.getItem('liked-recipes'));
console.log(likedRecipesArray);

if (likedRecipesArray.length !== 0) {
  emptyPlaceholderRef.classList.add('is-hidden');
  deleteBtnRef.classList.remove('is-hidden');
}

if (!likedRecipesArray || likedRecipesArray.length === 0) {
  return;
} else {
  console.log(likedRecipesArray);
  for (const recipe of likedRecipesArray) {
    renderFavoriterecipes(recipe).then(({ data }) => {
      createMarkup([data]);
    });
  }
}

deleteBtnRef.addEventListener('click', () => {
  localStorage.setItem('liked-recipes', JSON.stringify([]));
  emptyPlaceholderRef.classList.remove('is-hidden');
  deleteBtnRef.classList.add('is-hidden');
  likedRecipeList.innerHTML = 0;
});

function createMarkup(arr) {
  const markup = arr
    .map(({ preview, title, description, rating, _id }) => {
      return `<li >
                <div class="icon-heart">
              <button class="heart-svg-button" data-heart="${_id}">
              <svg height="22px" id="icon-heart" viewBox="0 0 36 32">
              <path class="svg" fill="none" opacity="0.9" stroke="#f8f8f8"  stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.9091" d="M15.991 6.848c-2.666-3.117-7.113-3.956-10.451-1.101-3.341 2.854-3.811 7.625-1.188 11.001 2.182 2.806 8.781 8.724 10.944 10.64 0.243 0.214 0.364 0.321 0.505 0.364 0.057 0.017 0.123 0.028 0.191 0.028s0.133-0.010 0.195-0.029l-0.005 0.001c0.141-0.042 0.262-0.15 0.505-0.364 2.163-1.916 8.762-7.834 10.943-10.64 2.624-3.375 2.211-8.177-1.187-11.001-3.398-2.825-7.785-2.016-10.451 1.101z"></path>
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
}
