import { createReducer } from '@reduxjs/toolkit';
import { ON_SEARCHBAR, OFF_SEARCHBAR } from './action';

const initialState = true;

const needSearchBarReducer = createReducer(initialState, {
  [ON_SEARCHBAR]: () => {
    return true;
  },
  [OFF_SEARCHBAR]: () => {
    return false;
  },
});

export default needSearchBarReducer;
