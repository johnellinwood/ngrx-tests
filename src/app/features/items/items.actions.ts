import {createAction} from '@ngrx/store';

/**
 * Action to set items to the provided value
 * @aram items string[] to set
 */
export const setItems = createAction(
  '[Items] Set', (items: string[]) => {
    return {items};
  }
);

/**
 * Action to (re)load all the item data from the server
 * Should be picked up by an effect to load the data
 */
export const loadItems = createAction(
  '[Items] Load'
);

/**
 * Action to indicate items load failed
 */
export const loadItemsError = createAction(
  '[Items] Load Error', (message) => ({message})
);
