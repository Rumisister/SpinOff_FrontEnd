import { createReducer } from '@reduxjs/toolkit';
import {
  AVAILABLE_ID,
  AVAILABLE_NICK,
  DUPCHECK_NEEDED,
  FAILED_AUTH,
  FAILED_RECEIVE,
  FAILED_SIGNUP,
  IDEXISTING_CHECK,
  INVALID_ID,
  INVALID_NICK,
  NICKEXISTING_CHECK,
  REQUEST_AUTH,
  RESET,
  RE_REQUEST,
  SUCCESS_AUTH,
  SUCCESS_RECEIVE,
  SUCCESS_SIGNUP,
} from './action';

const initialState = {
  inputs: {
    name: '',
    birth: '',
    phone: '',
    email: '',
    auth: '',
    id: '',
    pw: '',
    nickName: '',
  },
  endTime: -1,
  error: undefined,
  endAuth: false,
  idExist: false,
  idCheckSuccess: false,
  nickCheckSuccess: false,
  nickExist: false,
  authSuccess: true,
  receiveSuccess: true,
  signUpSuccess: false,
};

const signUpReducer = createReducer(initialState, {
  [REQUEST_AUTH]: state => ({
    ...state,
  }),
  [RE_REQUEST]: state => ({
    ...state,
    endTime: -1,
    receiveSuccess: true,
  }),
  [SUCCESS_RECEIVE]: state => ({
    ...state,
    endTime: new Date().getTime() + 180000,
    receiveSuccess: true,
  }),
  [FAILED_RECEIVE]: state => ({
    ...state,
    receiveSuccess: false,
  }),
  [SUCCESS_AUTH]: (state, action) => ({
    ...state,
    inputs: {
      ...state.inputs,
      name: action?.payload?.name,
      birth: action?.payload?.birth,
      phone: action?.payload?.phone,
      email: action?.payload?.email,
      auth: action?.payload?.auth,
    },
    authSuccess: true,
    endAuth: true,
    endTime: -1,
  }),
  [FAILED_AUTH]: state => ({
    ...state,
    authSuccess: false,
  }),
  [IDEXISTING_CHECK]: state => ({
    ...state,
  }),
  [NICKEXISTING_CHECK]: state => ({
    ...state,
  }),
  [AVAILABLE_ID]: (state, action) => ({
    ...state,
    idExist: false,
    idCheckSuccess: true,
    inputs: {
      ...state.inputs,
      id: action.payload,
    },
  }),
  [INVALID_ID]: state => ({
    ...state,
    idExist: true,
    idCheckSuccess: false,
  }),
  [AVAILABLE_NICK]: (state, action) => ({
    ...state,
    nickExist: false,
    nickCheckSuccess: true,
    inputs: {
      ...state.inputs,
      nickName: action.payload,
    },
  }),
  [INVALID_NICK]: state => ({
    ...state,
    nickExist: true,
    nickCheckSuccess: false,
  }),
  [SUCCESS_SIGNUP]: state => ({
    ...state,
    signUpSuccess: true,
  }),
  [FAILED_SIGNUP]: state => ({
    ...state,
    signUpSuccess: false,
  }),
  [DUPCHECK_NEEDED]: (state, action) => ({
    ...state,
    [`${action.payload}CheckSuccess`]: false,
  }),
  [RESET]: () => ({
    ...initialState,
  }),
});

export default signUpReducer;
