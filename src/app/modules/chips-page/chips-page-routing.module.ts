import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChipsPageComponent } from './chips-page.component';

const routes: Routes = [
  {
    path: '',
    component: ChipsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChipsPageRoutingModule {}
