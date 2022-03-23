import { createReducer } from '@reduxjs/toolkit';
import { TOGGLE_FILTER, DISCOVERY, FOLLOWING } from './action';

const initialState = 'discovery';

const listFilterReducer = createReducer(initialState, {
  [TOGGLE_FILTER]: state => {
    return state === 'discovery' ? 'following' : 'discovery';
  },
  [DISCOVERY]: () => {
    return 'discovery';
  },
  [FOLLOWING]: () => {
    return 'following';
  },
});

export default listFilterReducer;
