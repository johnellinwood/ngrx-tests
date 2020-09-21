import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {ReactiveComponentModule} from '@ngrx/component';

import {ItemsComponent} from './items.component';
import * as fromItems from './items.reducers';

@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    StoreModule.forFeature(fromItems.itemsFeatureKey, fromItems.reducers)
  ],
  exports: []
})
export class ItemsModule {}
