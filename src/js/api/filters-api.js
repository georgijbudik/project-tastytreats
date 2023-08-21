import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes';
export const filterCards = (searchQuery, page) => {
  const url = `${BASE_URL}?title=${searchQuery}&page=${page}`;
  return axios.get(url).then(response => response.data);
};

export const filterFood = (ingredient, limit, page) => {
  const url = `${BASE_URL}?ingredient=${ingredient}&limit=${limit}&page=${page}`;
  return axios.get(url).then(response => response.data);
};

export const selectTime = (time, limit, page) => {
  const url = `${BASE_URL}?time=${time}&limit=${limit}&page=${page}`;
  return axios.get(url).then(response => response.data);
};

export const selectArea = (area, limit, page) => {
  const url = `${BASE_URL}?area=${area}&limit=${limit}&page=${page}`;
  return axios.get(url).then(response => response.data);
};

// export const selectTimeOption = time => {
//   const url = `${BASE_URL}?time=${time}`;
//   return axios.get(url).then(response => response.data);
// };
