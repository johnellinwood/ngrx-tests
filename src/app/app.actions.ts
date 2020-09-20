import {Action} from '@ngrx/store';

export enum ItemActionTypes {
  LoadItems = '[Items] Load',
}

export class Load implements Action {
  readonly type = ItemActionTypes.LoadItems;
  constructor(readonly payload: string[]){}
}

export type ItemAction = Load;
