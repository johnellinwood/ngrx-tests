import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {INIT} from '@ngrx/store';
import {Actions, createEffect, ofType, ROOT_EFFECTS_INIT} from '@ngrx/effects';
import {ItemsService} from '../features/items/items.service';

@Injectable()
export class RootEffects {

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
      tap(() => console.log('Root effects initialized'))
    ), {dispatch: false});

  constructor(private actions$: Actions, private itemsService: ItemsService) {
  }

  // Deferred effect execution some place in the middle of effect initialization
  // @Effect()
  // init$ = defer(() => of(new Action...));

}
