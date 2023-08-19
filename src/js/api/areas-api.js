import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/areas';
export const filterAreas = () => {
  return axios.get(BASE_URL).then(response => response.data);
};
