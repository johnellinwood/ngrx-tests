import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root' // move to a feature
})
export class ItemsService {
  /**
   * Loads items from the server and returns them
   * @returns string[] as an Observable
   */
  public get(): Observable<string[]> {
    console.log('ItemsService, getting items');
    return of(['a', 'b', 'c']);
  }
}

