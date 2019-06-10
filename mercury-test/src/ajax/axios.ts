import axios from 'axios';

export const appAxios = axios.create({
    baseURL: 'https://reqres.in/api',
});
