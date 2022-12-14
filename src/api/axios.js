import Axios from 'axios';
import { store } from '../store';
import { delToken, setToken, signOut } from '../store/Auth/action';
console.log(process.env.REACT_APP_API_URL + '$$');
export const axios = Axios.create({
  //baseURL: process.env.REACT_APP_API_URL,
});

axios.interceptors.request.use(config => {
  config.headers['X-AUTH-TOKEN'] =
    store?.getState()?.authReducer?.access_token || '';
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
      console.log('----------');
      console.log('리프레쉬 토큰 재발급');
      console.log('----------');
      const originRequest = config;
      const originRefreshToken = store?.getState()?.authReducer?.refresh_token;
      const originAccessToken = store?.getState()?.authReducer?.access_token;
      const originMemeberId = store?.getState().authReducer?.member_id;
      console.log(originAccessToken);
      console.log(originRefreshToken);
      console.log(originMemeberId);
      store.dispatch(delToken());
      try {
        const {
          data: {
            data: { accessToken, refreshToken },
          },
        } = await axios({
          method: 'patch',
          url: '/api/sign/reissue',
          data: {
            accessToken: originAccessToken,
            refreshToken: originRefreshToken,
          },
        });
        console.log('리프레시토큰 재발급 성공!!!');
        console.log(accessToken);
        console.log(refreshToken);
        store.dispatch(
          setToken({
            token: accessToken,
            refreshToken,
            id: originMemeberId,
          }),
        );
        return axios(originRequest);
      } catch (error) {
        store.dispatch(signOut());
        console.log(error);
      }
    }
    return Promise.reject(error.response);
  },
);
