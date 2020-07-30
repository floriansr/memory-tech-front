import axios from 'axios';
import Cookies from 'js-cookie';

const API = axios.create({
  baseURL: 'http://localhost:8080',
});

API.interceptors.request.use(
  ({ headers, ...config }) => ({
    ...config,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      Authorization:
        Cookies.get('checkout') !== undefined
          ? JSON.parse(Cookies.get('checkout')).token
          : '',
    },
  }),
  (error) => {
    return Promise.reject(error);
  }
);

export default class APIManager {
  static async allCountries() {
    const res = await API.get('api/v1/revenues/all');
    return res.data;
  }

  static async avgRevenuesAll() {
    const res = await API.get('api/v1/avg_revenues/all');
    return res.data;
  }

  static async numberCustomers() {
    const res = await API.get('api/v1/customers');
    return res.data;
  }
}
