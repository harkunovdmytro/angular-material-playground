import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonPageComponent } from './mat-button-page.component';

const routes: Routes = [
  {
    path: '',
    component: MatButtonPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatButtonPageRoutingModule {}
