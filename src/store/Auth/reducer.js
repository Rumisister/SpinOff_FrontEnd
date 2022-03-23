import { createReducer } from '@reduxjs/toolkit';
import { DEL_TOKEN, SET_TOKEN } from './action';

const initialState = {
  isSignIn: false,
  access_token: '',
  refresh_token: '',
};

const authReducer = createReducer(initialState, {
  [SET_TOKEN]: (state, action) => ({
    ...state,
    isSignIn: true,
    access_token: action.payload.token,
    refresh_token: action.payload.refreshToken,
  }),
  [DEL_TOKEN]: state => ({
    ...state,
    isSignIn: false,
    access_token: '',
    refresh_token: '',
  }),
});

export default authReducer;
