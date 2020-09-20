import {ItemAction, ItemActionTypes} from './app.actions';

export interface State {
  items: string[];
}

export function itemsReducer(state: string[], action: ItemAction): string[] {
  switch (action.type) {
    case ItemActionTypes.LoadItems:
      console.log('reducing loaditems');
      return action.payload;
    default:
      return state;
  }
}
