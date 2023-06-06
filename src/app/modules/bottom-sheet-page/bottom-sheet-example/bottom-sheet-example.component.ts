import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-example',
  templateUrl: './bottom-sheet-example.component.html',
  styleUrls: ['./bottom-sheet-example.component.scss'],
})
export class BottomSheetExampleComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetExampleComponent>
  ) {}

  public openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
