import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3002'; // set default url

export default class api {
  static loginAdmin = (credentials) => axios.post('/admin', credentials);
  static createPost = (data) => axios.post('/create-post', data);
};
