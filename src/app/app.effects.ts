import {Injectable} from '@angular/core';
import {defer, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {State} from './app.reducers';
import * as ItemActions from './app.actions';

const initialState: string[] = ['one', 'two', 'three'];

@Injectable()
export class ItemEffects {

  constructor(private actions$: Actions, private store: Store<State>) {
  }

  @Effect()
  init$ = defer(() => of(new ItemActions.Load(initialState)));

}
