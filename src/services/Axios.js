import axios from 'axios';

/**
  * function that call the data by Axios protocol
*/   
const apiData = axios.create({
  baseURL  : "http://localhost:3000/",
  timeout: 1000,
});

export default apiData