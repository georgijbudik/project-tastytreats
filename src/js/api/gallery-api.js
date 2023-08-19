import axios from 'axios';

export const BASE_URL =
  'https://tasty-treats-backend.p.goit.global/api/recipes?';

//------------Андрей ---------- //
export const categorsCards = async (value, newPage, limit) => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      page: newPage,
      limit: limit,
      category: value,
    },
  });
  return response.data;
};

export const pageCards = async (newPage, limit) => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      page: newPage,
      limit: limit,
    },
  });
  return response.data;
};

//--------------Гоша----------------------//
