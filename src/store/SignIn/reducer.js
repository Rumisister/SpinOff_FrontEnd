import { createReducer } from '@reduxjs/toolkit';
import { FAILED_SIGNIN, RESET, SUCCESS_SIGNIN } from './action';

const initialState = {
  signInError: false,
  signInSuccess: false,
  refreshToken: '',
  token: '',
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
  [RESET]: () => ({
    ...initialState,
  }),
});

export default signInReducer;
