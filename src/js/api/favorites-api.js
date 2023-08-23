import axios from 'axios';

export function renderFavoriterecipes(recipe) {
  return axios.get(
    `https://tasty-treats-backend.p.goit.global/api/recipes/${recipe}`
  );
}
