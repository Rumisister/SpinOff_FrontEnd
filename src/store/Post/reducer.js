import { createReducer } from '@reduxjs/toolkit';
import {
  ADD_IMAGES,
  CHANGE_COLLECTION,
  CHANGE_HASHTAGS,
  CHANGE_INPUT,
  CHANGE_PUBLIC,
  DELETE_IMAGES,
  RESET,
} from './action';

const initialState = {
  createPostVO: {
    title: '',
    content: '',
    movieId: null,
    publicOfPostStatus: 'A',
    hashtagContents: [],
    collectionIds: [],
  },
  images: [],
};

const postReducer = createReducer(initialState, {
  [CHANGE_INPUT]: (state, action) => ({
    ...state,
    createPostVO: {
      ...state.createPostVO,
      [action?.payload?.name]: action?.payload?.value,
    },
  }),
  [CHANGE_HASHTAGS]: (state, action) => ({
    ...state,
    createPostVO: {
      ...state.createPostVO,
      hashtagContents: [...action.payload],
    },
  }),
  [ADD_IMAGES]: (state, action) => ({
    ...state,
    images: [...state.images, action.payload],
  }),
  [DELETE_IMAGES]: (state, action) => ({
    ...state,
    images: [...action.payload],
  }),
  [CHANGE_COLLECTION]: (state, action) => ({
    ...state,
    createPostVO: {
      ...state.createPostVO,
      collectionIds: [...action.payload],
    },
  }),
  [CHANGE_PUBLIC]: (state, action) => ({
    ...state,
    createPostVO: {
      ...state.createPostVO,
      publicOfPostStatus: action.payload,
    },
  }),
  [RESET]: () => ({
    ...initialState,
  }),
});

export default postReducer;
