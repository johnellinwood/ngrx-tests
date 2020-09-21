import {Component} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  item$: Observable<string[]>;
}

