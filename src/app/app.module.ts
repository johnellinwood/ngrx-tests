import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RootStore} from './store/store.module';
import {ItemsModule} from './features/items/items.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RootStore,
    ItemsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
