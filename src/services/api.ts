import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dt-money-fluhis.vercel.app/api/',
});

export { api };
