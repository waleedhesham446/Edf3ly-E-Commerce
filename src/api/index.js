import axios from 'axios';

const API = axios.create({ baseURL: 'https://test-api.edfa3ly.io' });       //  back-end api

export const fetchProducts = (categoryId) => API.get(`/product?categoryId=${categoryId}`);  //  Fetching products

export const fetchCategories = () => API.get(`/category`);      //  Fetching categories