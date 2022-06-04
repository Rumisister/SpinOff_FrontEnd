import { createAction } from '@reduxjs/toolkit';

export const ALLTYPE = 'SearchFilter/ALLTYPE';
export const COLLECTIONTYPE = 'SearchFilter/COLLECTIONTYPE';
export const MEMBERTYPE = 'SearchFilter/MEMBERTYPE';
export const MOVIETYPE = 'SearchFilter/MOVIETYPE';

export const allType = createAction(ALLTYPE);
export const collectionType = createAction(COLLECTIONTYPE);
export const memberType = createAction(MEMBERTYPE);
export const movieType = createAction(MOVIETYPE);
