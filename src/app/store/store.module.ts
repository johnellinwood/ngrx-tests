import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {itemsReducer} from './root.reducers';
import {EffectsModule} from '@ngrx/effects';
import {RootEffects} from './root.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({items: itemsReducer}), // TODO create feature reducer
    EffectsModule.forRoot([RootEffects])
  ],
  providers: [],
  bootstrap: []
})
export class RootStore {
}
