import { createAction } from '@reduxjs/toolkit';

export const ON_SEARCHBAR = 'NeedSearchBar/ON_SEARCHBAR';
export const OFF_SEARCHBAR = 'NeedSearchBar/OFF_SEARCHBAR';

export const onSearchBar = createAction(ON_SEARCHBAR);
export const offSearchBar = createAction(OFF_SEARCHBAR);
