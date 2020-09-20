import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {itemsReducer} from './app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {ItemEffects} from './app.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({items: itemsReducer}),
    EffectsModule.forRoot([ItemEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
