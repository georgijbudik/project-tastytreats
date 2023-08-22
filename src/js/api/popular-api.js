import axios from 'axios';
import Notiflix from 'notiflix';

const listRecipes = document.querySelector('.popular-recipes-list');

async function fetchPopularRecipes() {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
  const response = await axios.get(`${BASE_URL}/recipes/popular`);
  return response;
}

fetchPopularRecipes()
  .then(response => {
    // console.log(response.data);
    // if (document.documentElement.clientWidth < 376) {
    //   response.data.splice(0, 2);
    //   createGalleryRecipes(response.data);
    //   return;
    // }
    createGalleryRecipes(response.data);
  })
  .catch(err => {
    Notiflix.Notify.failure(`❌No popular recipes. Sorry ${err.message} ❌`);
    console.log(err);
  });

function createGalleryRecipes(recipes) {
  const markup = recipes
    .map(({ title, preview, description, _id }) => {
      return `
      <li class="popular-recipes-item">
      <a class="popular-recipes-link" href="#" >
  <img class="popular-recipes-img" src="${preview}" alt="${title}" width="64"  data-id="${_id}"/>
  </a>
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
