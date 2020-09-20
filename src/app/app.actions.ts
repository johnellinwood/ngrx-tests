import {Action} from '@ngrx/store';

export enum ItemActionTypes {
  LoadItems = '[Items] Load',
  ClearItems = '[Items] Clear',
  AddItem = '[Items] Add',
  SetItems = '[Items] Set'
}

export class Load implements Action {
  readonly type = ItemActionTypes.LoadItems;
}

export class Set implements Action {
  readonly type = ItemActionTypes.SetItems;
  constructor(readonly payload: string[]) {}
}

export class Clear implements Action {
  readonly type = ItemActionTypes.ClearItems;
}

export class Add implements Action {
  readonly type = ItemActionTypes.AddItem;
  constructor(readonly payload: string) {}
}

export type ItemAction = Load | Clear | Add | Set;
