import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomSheetPageComponent } from './bottom-sheet-page.component';

const routes: Routes = [
  {
    path: '',
    component: BottomSheetPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomSheetPageRoutingModule {}
