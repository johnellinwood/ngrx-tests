import {InjectionToken} from '@angular/core';
import {ActionReducerMap, createFeatureSelector, createReducer, createSelector, on, select} from '@ngrx/store';
import * as ItemActionTypes from './items.actions';
import * as fromRoot from '../../store/root.reducers';

export interface ItemsState {
  values: string[];
}

export const itemsFeatureKey = 'items';

export const initialItemValueState = {
  values: []
};

export const itemValuesReducer = createReducer(
  initialItemValueState,
  on(ItemActionTypes.setItems,
    (state, payload) => payload.values)
);

export const reducers = new InjectionToken<ActionReducerMap<ItemsState>>(itemsFeatureKey, {
  factory: () => ({
    values: itemValuesReducer
  })
});

export interface State extends fromRoot.State {
  [itemsFeatureKey]: ItemsState;
}

const getItemsFeatureState = createFeatureSelector<State, ItemsState>(itemsFeatureKey);

const getItemValuesState = createSelector(getItemsFeatureState, state => state.values);
