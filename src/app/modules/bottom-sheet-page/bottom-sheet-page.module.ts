import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottomSheetPageRoutingModule } from './bottom-sheet-page-routing.module';
import { BottomSheetPageComponent } from './bottom-sheet-page.component';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BottomSheetExampleComponent } from './bottom-sheet-example/bottom-sheet-example.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [BottomSheetPageComponent, BottomSheetExampleComponent],
  imports: [
    CommonModule,
    BottomSheetPageRoutingModule,
    FormsModule,
    MatBadgeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatBottomSheetModule,
  ],
})
export class BottomSheetPageModule {}
