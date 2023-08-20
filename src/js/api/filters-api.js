import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes';
export const filterCards = (
  searchQuery,
  page,
  limit,
  time,
  area,
  ingredient
) => {
  const url = `${BASE_URL}?title=${searchQuery}&page=${page}`;
  // const searchParams = {
  //   category,
  //   page,
  //   limit,
  //   time,
  //   area,
  //   ingredient,
  // };
  return axios.get(url).then(response => response.data);
};

export const selectTime = time => {
  const url = `${BASE_URL}?time=${time}`;
  // const searchParams = {
  //   category,
  //   page,
  //   limit,
  //   time,
  //   area,
  //   ingredient,
  // };
  return axios.get(url).then(response => console.log(response.data));
};

export const selectArea = area => {
  const url = `${BASE_URL}?area=${area}`;
  // const searchParams = {
  //   category,
  //   page,
  //   limit,
  //   time,
  //   area,
  //   ingredient,
  // };
  return axios.get(url).then(response => response.data);
};
