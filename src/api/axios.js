import Axios from 'axios';
import { store } from '../store';
console.log(process.env.REACT_APP_API_URL + '$$');
export const axios = Axios.create({});

axios.interceptors.request.use(config => {
  console.log(store?.getState()?.authReducer?.accessToken);
  config.headers.Authorization =
    store?.getState()?.authReducer?.accessToken || '';
  return config;
});
