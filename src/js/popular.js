import { fetchPopularRecipes } from './api/popular-recipes-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const listRecipes = document.querySelector('.popular-recipes-list');

fetchPopularRecipes()
  .then(response => {
    createGalleryRecipes(response.data);
  })
  .catch(err => {
    Notify.failure(`❌No popular recipes. Sorry ${err.message} ❌`);
    console.log(err);
  });

function createGalleryRecipes(recipes) {
  const markup = recipes
    .map(({ title, preview, description, _id }) => {
      return `
      <li class="popular-recipes-item">
      <button class="popular-recipes-img-btn">
       <img class="popular-recipes-img js-see-recipe" src="${preview}" alt="${title}" width="64"  data-id="${_id}"/>
      </button>
   <div class="popular-recipes-text-wrapper">
    <h3 class="popular-recipes-title">
      ${title}
    </h3>
    <p class="text popular-recipes-text">
      ${description}
    </p>
    </div>
    </li>
`;
    })
    .join('');
  listRecipes.insertAdjacentHTML('beforeend', markup);
}
