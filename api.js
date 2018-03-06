import axios from 'axios';

export const baseURL = 'http://localhost:3002';

axios.defaults.baseURL = baseURL; // default url

export default class api {
  static loginAdmin = (credentials) => axios.post('/api/admin', credentials);
  static createPost = (values) => axios.post('/api/posts', values);
  static getPosts = () => axios.get('/api/posts');
  static saveImage = (file) => axios.post('/api/uploads', file);
};
