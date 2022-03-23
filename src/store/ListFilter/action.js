import { createAction } from '@reduxjs/toolkit';

export const TOGGLE_FILTER = 'ListFilter/TOGGLE_FILTER';
export const DISCOVERY = 'ListFilter/DISCOVERY';
export const FOLLOWING = 'ListFilter/FOLLOWING';

export const toggleFilter = createAction(TOGGLE_FILTER);
export const discovery = createAction(DISCOVERY);
export const following = createAction(FOLLOWING);
