import axios from 'axios';

export async function fetchPopularRecipes() {
    const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
    const response = await axios.get(`${BASE_URL}/recipes/popular`);
    return response;
}
