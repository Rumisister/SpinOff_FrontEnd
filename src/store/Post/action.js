import { createAction } from '@reduxjs/toolkit';

export const REQUEST_CREATE_POST = 'Post/REQUEST_CREATE_POST';
export const RESET = 'Post/RESET';
export const CHANGE_INPUT = 'Post/CHANGE_INPUT';
export const CHANGE_HASHTAGS = 'Post/CHANGE_HASHTAGS';
export const ADD_IMAGES = 'Post/ADD_IMAGES';
export const DELETE_IMAGES = 'Post/DELETE_IMAGES';
export const CHANGE_COLLECTION = 'Post/ADD_COLLECTION';
export const CHANGE_PUBLIC = 'Post/CHANGE_PUBLIC';
export const SUCCESS_CREATE_POST = 'Post/SUCCESS_CREATE_POST';
export const FAILED_CREATE_POST = 'Post/FAILED_CREATE_POST';

export const changeInput = createAction(CHANGE_INPUT);
export const changeHashTags = createAction(CHANGE_HASHTAGS);
export const addImages = createAction(ADD_IMAGES);
export const deleteImages = createAction(DELETE_IMAGES);
export const requestCreatePost = createAction(REQUEST_CREATE_POST);
export const changeCollection = createAction(CHANGE_COLLECTION);
export const changePublic = createAction(CHANGE_PUBLIC);
export const onPostReset = createAction(RESET);
