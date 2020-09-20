import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './app.reducers';
import * as ItemActions from './app.actions';
import {ItemActionTypes} from './app.actions';
import {map, tap} from 'rxjs/operators';


@Injectable()
export class ItemEffects {

  backendData: string[] = ['one', 'two', 'three'];

  @Effect()
  loadLocation$ = this.actions$
    .pipe(
      tap(() => console.log('ItemEffects')),
      ofType<ItemActions.Load>(ItemActionTypes.LoadItems),
      tap(() => console.log('ItemEffects for type ItemActions.Load')),
      map(() => new ItemActions.Set(this.backendData))
    );

  constructor(private actions$: Actions, private store: Store<State>) {
    // would inject backend service here
  }


}
