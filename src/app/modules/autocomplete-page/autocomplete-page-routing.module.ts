import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompletePageComponent } from './autocomplete-page.component';

const routes: Routes = [
  {
    path: '',
    component: AutocompletePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutocompletePageRoutingModule {}
