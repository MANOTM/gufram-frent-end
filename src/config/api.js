import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/', // Change to your API base URL
  timeout: 10000,  
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',},
});
 
export default api;