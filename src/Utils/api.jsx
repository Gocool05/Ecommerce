import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.shriworkscraft.com',
});

export default api;
