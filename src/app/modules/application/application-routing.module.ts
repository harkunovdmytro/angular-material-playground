import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationPageComponent } from './application-page.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationPageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home-page/home-page.module').then((m) => m.HomePageModule),
        data: {
          title: 'Home',
        },
        title: 'Home',
      },
      {
        path: 'autocomplete',
        loadChildren: () =>
          import('../autocomplete-page/autocomplete-page.module').then(
            (m) => m.AutocompletePageModule
          ),
        data: {
          title: 'autocomplete',
        },
        title: 'autocomplete',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
