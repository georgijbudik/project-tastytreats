import { BASE_URL } from './gallery-api';
import axios from 'axios';

export const filtrCards = (page, area, time, id, limit, ingredient) => {
  const searchParams = {
    page: page,
    area: area,
    time: time,
    id: id,
    limit: limit,
    ingredient,
  };
  return axios.get(BASE_URL, { searchParams }).then(response => response.data);
};
