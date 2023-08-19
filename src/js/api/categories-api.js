import axios from 'axios';

const URL = 'https://tasty-treats-backend.p.goit.global/api/categories';

export const fetchCategories = async () => {
  const response = await axios.get(`${URL}`);
  return response;
};
