import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {State} from './app.reducers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  item$: Observable<string[]>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.item$ = this.store.pipe(select((state: State) => state.items));
  }

}
