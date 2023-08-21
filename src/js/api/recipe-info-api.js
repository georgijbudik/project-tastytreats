import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes/';

export default async function fetchRecipeById(id) {
  try {
    const recipeResponse = await axios.get(`${BASE_URL}${id}`);
    const recipe = recipeResponse.data;
    return recipe;
  } catch (error) {
    console.warn(error.message);
  }
}
