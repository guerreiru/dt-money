import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dt-money-eta-blush.vercel.app/api',
});

export { api };
