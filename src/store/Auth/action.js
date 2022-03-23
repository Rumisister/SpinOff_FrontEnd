import { createAction } from '@reduxjs/toolkit';

export const SET_TOKEN = 'Auth/SET_TOKEN';
export const DEL_TOKEN = 'Auth/DEL_TOKEN';
export const REFRESH_TOKEN = 'AUTH/REFRESH_TOKEN';

export const setToken = createAction(SET_TOKEN);
export const delToken = createAction(DEL_TOKEN);
export const refreshToken = createAction(REFRESH_TOKEN);
