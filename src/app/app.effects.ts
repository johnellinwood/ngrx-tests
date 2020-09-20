import {Injectable} from '@angular/core';
import {defer, of} from 'rxjs';
import {Actions, createEffect, Effect} from '@ngrx/effects';
import {State} from './app.reducers';
import * as ItemActions from './app.actions';
import {tap} from 'rxjs/operators';

const initialState: string[] = ['one', 'two', 'three'];

@Injectable()
export class ItemEffects {

  constructor(private actions$: Actions) {
  }

  logActions$ = createEffect(() =>
    this.actions$.pipe(
      tap(action => console.log('log action', action))
    ), { dispatch: false });

  @Effect()
  init$ = defer(() => of(new ItemActions.Load(initialState)));

}
