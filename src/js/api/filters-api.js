import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes';
export const filterCards = (category, page, limit, time, area, ingredient) => {
  const searchParams = {
    category,
    page,
    limit,
    time,
    area,
    ingredient,
  };
  return axios.get(BASE_URL, { searchParams }).then(response => response.data);
};
