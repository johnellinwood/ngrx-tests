import {select} from '@ngrx/store';

export interface RootState {
  items: string[];
}

export const itemsSelector = select((state: RootState) => state.items);
