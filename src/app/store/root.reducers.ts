import {createReducer, on} from '@ngrx/store';
import * as ItemActionTypes from './root.actions';

export const initialState = [];

// items reducer should be bound to root property 'items'. This reducer handles just the value of that property
export const itemsReducer = createReducer(
  initialState,
  on(ItemActionTypes.setItems,
    (state, payload) => payload.items)
);
