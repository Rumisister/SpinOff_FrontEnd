import { createReducer } from '@reduxjs/toolkit';
import { ALLTYPE, COLLECTIONTYPE, MEMBERTYPE, MOVIETYPE } from './action';

const initialState = 'all';

const searchFilterReducer = createReducer(initialState, {
  [ALLTYPE]: () => {
    return 'all';
  },
  [COLLECTIONTYPE]: () => {
    return 'collection';
  },
  [MEMBERTYPE]: () => {
    return 'member';
  },
  [MOVIETYPE]: () => {
    return 'movie';
  },
});

export default searchFilterReducer;
