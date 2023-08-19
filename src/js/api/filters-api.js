import { BASE_URL } from './gallery-api';

export const filtrCards = async (page, area, time, id, limit) => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      page: page,
      area: area,
      time: time,
      id: id,
      limit: limit,
    },
  });
  return response.data;
};
