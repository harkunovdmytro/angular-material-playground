import {Component, OnDestroy} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-unsubscriber',
  templateUrl: './unsubscriber.component.html',
})
export class Unsubscriber implements OnDestroy {
  public unsubscribe = new Subject<void>();

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
