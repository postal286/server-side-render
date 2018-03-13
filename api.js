import axios from 'axios';

export const baseURL = 'http://localhost:3002';

axios.defaults.baseURL = baseURL; // default url

export default class api {
  static loginAdmin = (credentials) => axios.post('/api/admin', credentials);
  static createPost = (values) => axios.post('/api/posts', values);
  static getPosts = () => axios.get('/api/posts');
  static saveImage = (file) => {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    const formData = new FormData();
    formData.append('image', file);
    return axios.post('/api/uploads', formData, config);
  }
};
