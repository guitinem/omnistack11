import axios from 'axios';

const app = axios.create({
    baseURL: 'http://192.168.15.1:3333'
});

export default api;