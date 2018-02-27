import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001'; // set default url

export default class api {
  static loginAdmin = (credentials) => axios.post('/admin', credentials);
};
