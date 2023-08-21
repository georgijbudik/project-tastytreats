import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes';
export const filterCards = (
  searchQuery,
  page,
  ingredient,
  limit,
  time,
  area
) => {
  const url = `${BASE_URL}?title=${searchQuery}&page=${page}`;
  return axios.get(url).then(response => response.data);
};

export const filterFood = ingredient => {
  const url = `${BASE_URL}?ingredient=${ingredient}`;
  return axios.get(url).then(response => response.data);
};

export const selectTime = time => {
  const url = `${BASE_URL}?time=${time}`;
  return axios.get(url).then(response => response.data);
};

export const selectArea = area => {
  const url = `${BASE_URL}?area=${area}`;
  return axios.get(url).then(response => response.data);
};

// export const selectTimeOption = time => {
//   const url = `${BASE_URL}?time=${time}`;
//   return axios.get(url).then(response => response.data);
// };