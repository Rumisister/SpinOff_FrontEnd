import { createAction } from '@reduxjs/toolkit';

export const SET_TOKEN = 'Auth/SET_TOKEN';
export const DEL_TOKEN = 'Auth/DEL_TOKEN';
export const SIGN_OUT = 'Auth/SIGN_OUT';
export const REFRESH_TOKEN = 'AUTH/REFRESH_TOKEN';
export const SET_GOBACK_PAGE = 'Auth/SET_GOBACK_PAGE';

export const setToken = createAction(SET_TOKEN);
export const delToken = createAction(DEL_TOKEN);
export const signOut = createAction(SIGN_OUT);
export const refreshToken = createAction(REFRESH_TOKEN);
export const setGoBackPage = createAction(SET_GOBACK_PAGE);
