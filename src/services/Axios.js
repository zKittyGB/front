import axios from 'axios';

const apiData = axios.create({
  baseURL  : "http://localhost:3000/",
  timeout: 1000,
});

export default apiData