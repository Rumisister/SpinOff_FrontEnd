import Axios from 'axios';
import { store } from '../store';
import { DEL_TOKEN, SET_TOKEN } from '../store/Auth/action';
console.log(process.env.REACT_APP_API_URL + '$$');
export const axios = Axios.create({});

axios.interceptors.request.use(config => {
  console.log(store?.getState()?.authReducer?.accessToken);
  //config.headers['X-AUTH-TOKEN'] =
  //store?.getState()?.authReducer?.access_token || '';
  return config;
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.log(error);
    const { config, response } = error || {};
    const { status } = response || {};
    if (status === 401) {
      const originRequest = config;
      const originRefreshToken = store?.getState()?.authReducer?.refresh_token;
      const originAccessToken = store?.getState()?.authReducer?.access_token;
      try {
        const {
          data: {
            data: { token, refreshToken },
          },
        } = await axios({
          method: 'patch',
          url: '/api/sign/reissue',
          data: {
            accessToken: originAccessToken,
            refreshToken: originRefreshToken,
          },
        });
        store.dispatch({
          type: SET_TOKEN,
          payload: { token, refreshToken },
        });
        return axios(originRequest);
      } catch (error) {
        store.dispatch({
          type: DEL_TOKEN,
        });
        console.log(error);
      }
    }
    return Promise.reject(error);
  },
);
