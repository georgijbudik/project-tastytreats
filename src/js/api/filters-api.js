import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/time';
export const filterCards = (areas, time, id, limit, ingredient) => {
  const searchParams = {
    // areas: areas,
    // time: time,
    // id: id,
    // limit: 50,
    // ingredient,
  };
  return axios.get(BASE_URL, { searchParams }).then(response => response.data);
};
