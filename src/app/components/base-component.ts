import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseComponent implements OnDestroy {
  public dispose$ = new BehaviorSubject<boolean>(false);

  ngOnDestroy(): void {
    this.dispose$.next(true);
  }
}
