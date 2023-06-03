import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationPageComponent} from './application-page.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationPageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../home-page/home-page.module').then(m => m.HomePageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule {
}
