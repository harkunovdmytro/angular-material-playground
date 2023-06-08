import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgePageComponent } from './badge-page.component';

const routes: Routes = [
  {
    path: '',
    component: BadgePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgePageRoutingModule {}
