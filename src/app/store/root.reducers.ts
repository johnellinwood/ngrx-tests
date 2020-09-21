import {createReducer, on} from '@ngrx/store';

export interface State {
  version: number;
}

export const initialState = {
  version: 1
};

export const rootReducer = createReducer(initialState);
