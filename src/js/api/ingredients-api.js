import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/ingredients';
export const filterIngredients = () => {
  return axios.get(BASE_URL).then(response => response.data);
};
