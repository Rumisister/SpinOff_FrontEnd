import { createAction } from '@reduxjs/toolkit';

export const REQUEST_SIGNIN = 'SignIn/REQUEST_SIGNIN';
export const RESET = 'SignIn/RESET';
export const SUCCESS_SIGNIN = 'SignIn/SUCCESS_SIGNIN';
export const FAILED_SIGNIN = 'SignIn/FAILED_SIGNIN';

export const requestSignIn = createAction(REQUEST_SIGNIN);
export const onReset = createAction(RESET);
