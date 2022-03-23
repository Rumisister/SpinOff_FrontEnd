import { createAction } from '@reduxjs/toolkit';

export const REQUEST_AUTH = 'SignUp//REQUEST_AUTH ';
export const RE_REQUEST = 'SignUp/RE_REQUEST';
export const CHECK_AUTH = 'SignUp/CHECK_AUTH';
export const SUCCESS_AUTH = 'SignUp//SUCCESS_AUTH';
export const FAILED_AUTH = 'SignUp//FAILED_AUTH';
export const SET_TIMER = 'SignUp/SET_TIMER';
export const SUCCESS_RECEIVE = 'SignUp/SUCCESS_RECEIVE';
export const FAILED_RECEIVE = 'SignUp/FAILED_RECEIVE';
export const IDEXISTING_CHECK = 'SignUp/IDEXISTING_CHECK';
export const AVAILABLE_ID = 'SignUp/AVAILABLE_ID';
export const INVALID_ID = 'SignUp/INVALID_ID';
export const NICKEXISTING_CHECK = 'SignUp/NICKEXISTING_CHECK';
export const AVAILABLE_NICK = 'SignUp/AVAILABLE_NICK';
export const INVALID_NICK = 'SignUp/INVALID_NICK';
export const REQUEST_SIGNUP = 'SignUp/REQUEST_SIGNUP';
export const SUCCESS_SIGNUP = 'SignUp/SUCCESS_SIGNUP';
export const FAILED_SIGNUP = 'SignUp/FAILED_SIGNUP';
export const DUPCHECK_NEEDED = 'SignUp/DUPCHECK_NEEDED';
export const RESET = 'SignUp/RESET';

export const requestAuth = createAction(REQUEST_AUTH);
export const reRequest = createAction(RE_REQUEST);
export const checkAuth = createAction(CHECK_AUTH);
export const successAuth = createAction(SUCCESS_AUTH);
export const failedAuth = createAction(FAILED_AUTH);
export const setTimer = createAction(SET_TIMER);
export const successreceive = createAction(SUCCESS_RECEIVE);
export const failedreceive = createAction(FAILED_RECEIVE);
export const idExsistingCheck = createAction(IDEXISTING_CHECK);
export const nickExsistingCheck = createAction(NICKEXISTING_CHECK);
export const requestSignUp = createAction(REQUEST_SIGNUP);
export const dupCheckNeeded = createAction(DUPCHECK_NEEDED);
export const onReset = createAction(RESET);
