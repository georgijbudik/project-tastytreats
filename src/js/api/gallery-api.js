import axios from 'axios';

const BASE_URL = "https://tasty-treats-backend.p.goit.global/api/recipes"

export const categorsCards = async (value,newPage,limit) => {
  const response = await axios.get(`${BASE_URL}`,{params:{
    page:newPage,
    limit:limit,
    category:value,
  }});
  return response.data;
};

export const pageCards = async (newPage,limit) => {
  const response = await axios.get(`${BASE_URL}`,{params:{
    page:newPage,
    limit:limit,
  }});
  return response.data;
};


export const filtrCards = async (id) => {
  const response = await axios.get(`${BASE_URL}?category=Beef&page=1&limit=6&time=160&area=Irish&ingredients=${id}`);
  return response.data;
};

