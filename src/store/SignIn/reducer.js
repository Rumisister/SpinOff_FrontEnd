import { createReducer } from '@reduxjs/toolkit';
import {
  FAILED_SIGNIN,
  RESET,
  SET_GOBACK_PAGE,
  SUCCESS_SIGNIN,
} from './action';

const initialState = {
  signInError: false,
  signInSuccess: false,
  refreshToken: '',
  token: '',
  goBackPage: '',
};

const signInReducer = createReducer(initialState, {
  [SUCCESS_SIGNIN]: state => ({
    ...state,
    signInSuccess: true,
    signInError: false,
  }),
  [FAILED_SIGNIN]: state => ({
    ...state,
    signInSuccess: false,
    signInError: true,
  }),
  [SET_GOBACK_PAGE]: (state, action) => ({
    ...state,
    goBackPage: action.payload,
  }),
  [RESET]: () => ({
    ...initialState,
  }),
});

export default signInReducer;
