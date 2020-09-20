import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectItems, State} from './app.reducers';
import {Observable} from 'rxjs';
import * as ItemActions from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'store-test';

  item$: Observable<string[]>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.item$ = this.store.pipe(select(selectItems));
  }

  loadItems(): void {
    console.log('Load button pressed');
    this.store.dispatch(new ItemActions.Load());
  }

  clearItems() {
    console.log('Clear button pressed');
    this.store.dispatch(new ItemActions.Clear());
  }
}
