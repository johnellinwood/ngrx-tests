import {ActionReducerMap} from '@ngrx/store';
import {Add, ItemAction, ItemActionTypes} from './app.actions';

export interface State {
  items: string[];
};

export const initialItemsState = ['init'];

export function itemsReducer(state: string[] = initialItemsState, action: ItemAction | null): string[] {
  console.log('itemsReducer', state, action);
  console.log(`processing ${action?.type}`);
  switch (action.type) {
    case ItemActionTypes.LoadItems:
      return state;
    case ItemActionTypes.ClearItems:
      console.log('ClearItems action');
      return initialItemsState;
    case ItemActionTypes.AddItem:
      return state.concat((action as Add).payload);
    case ItemActionTypes.SetItems:
      return action.payload;
    default:
      console.log('Processing default action');
      return state;
  }
}

export const reducers: ActionReducerMap<State> = {
  items: itemsReducer
};

export const selectItems = (state: State) => state.items;
