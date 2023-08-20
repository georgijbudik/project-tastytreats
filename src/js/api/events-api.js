import axios from 'axios';

const BASE_URL = "https://tasty-treats-backend.p.goit.global/api/events";

export async function fetchEvents() {
    return axios.get(`${BASE_URL}`).then(response => response.data);
}