import axios from 'axios';
import Cookies from 'js-cookie';

const API = axios.create({
  baseURL: 'https://intothememory.herokuapp.com/',
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

  static async oneCountry(country) {
    const res = await API.post('api/v1/country', { country });
    console.log('APIManager -> oneCountry -> res', res.data);
    return res.data;
  }
}
