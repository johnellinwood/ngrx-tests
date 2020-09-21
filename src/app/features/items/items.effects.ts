import * as ItemActions from './items.actions';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType, OnInitEffects} from '@ngrx/effects';
import {ItemsService} from './items.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {of} from 'rxjs';

@Injectable()
export class ItemEffects implements OnInitEffects {

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

  constructor(private actions$: Actions, private itemsService: ItemsService) {
  }

  ngrxOnInitEffects(): Action {
    return ItemActions.loadItems();
  }
}
