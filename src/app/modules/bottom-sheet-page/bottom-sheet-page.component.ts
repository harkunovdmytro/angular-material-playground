import { Component, TemplateRef } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetExampleComponent } from './bottom-sheet-example/bottom-sheet-example.component';

@Component({
  selector: 'app-bottom-sheet-page',
  templateUrl: './bottom-sheet-page.component.html',
  styleUrls: ['./bottom-sheet-page.component.scss'],
})
export class BottomSheetPageComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  public openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetExampleComponent);
  }

  public openBottomSheetWithTemplate(element: TemplateRef<any>): void {
    this._bottomSheet.open(element);
  }
}
