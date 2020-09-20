import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {INIT} from '@ngrx/store';
import {ROOT_EFFECTS_INIT, Actions, createEffect, ofType} from '@ngrx/effects';

import * as ItemActions from './root.actions';
import {ItemsService} from '../core/services/items.service';

@Injectable()
export class RootEffects {

  constructor(private actions$: Actions, private itemsService: ItemsService) {
  }

  // Catch all actions and log them
  logActions$ = createEffect(() =>
    this.actions$.pipe(
      tap(action => console.log('log action', action))
    ), {dispatch: false});

  // Lifecycle: Catch the INIT, which is run after the store is initialized but before the effects
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(INIT),
      tap(() => console.log('Root store initialized'))
    ), {dispatch: false});

  // Lifecycle: Catch the ROOT_EFFECTS_INIT, which is run after all the store and all effects are initialized
  rootEffectsInit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => ItemActions.loadItems())
    ));

  // TODO move this to a feature
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadItems),
      switchMap(action =>
        this.itemsService.get().pipe(
          map(items => ItemActions.setItems(items)),
          catchError(error => of(ItemActions.loadItemsError(error))),
        )
      )
    ));

  // Deferred effect execution some place in the middle of effect initialization
  // @Effect()
  // init$ = defer(() => of(new ItemActions.Load(initialState)));

}
