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
      {
        path: 'badge',
        loadChildren: () =>
          import('../badge-page/badge-page.module').then(
            (m) => m.BadgePageModule
          ),
        data: {
          title: 'badge',
        },
        title: 'badge',
      },
      {
        path: 'bottom-sheet',
        loadChildren: () =>
          import('../bottom-sheet-page/bottom-sheet-page.module').then(
            (m) => m.BottomSheetPageModule
          ),
        data: {
          title: 'Bottom Sheet',
        },
        title: 'Bottom Sheet',
      },
      {
        path: 'button',
        loadChildren: () =>
          import('../mat-button-page/mat-button-page.module').then(
            (m) => m.MatButtonPageModule
          ),
        data: {
          title: 'Button',
        },
        title: 'Button',
      },
      {
        path: 'button-toggle',
        loadChildren: () =>
          import('../button-toggle-page/button-toggle-page.module').then(
            (m) => m.ButtonTogglePageModule
          ),
        data: {
          title: 'Button Toggle',
        },
        title: 'Button Toggle',
      },
      {
        path: 'card',
        loadChildren: () =>
          import('../card-page/card-page.module').then((m) => m.CardPageModule),
        data: {
          title: 'Card',
        },
        title: 'Card',
      },
      {
        path: 'checkbox',
        loadChildren: () =>
          import('../checkbox-page/checkbox-page.module').then(
            (m) => m.CheckboxPageModule
          ),
        data: {
          title: 'Checkbox',
        },
        title: 'Checkbox',
      },
      {
        path: 'chips',
        loadChildren: () =>
          import('../chips-page/chips-page.module').then(
            (m) => m.ChipsPageModule
          ),
        data: {
          title: 'Chips',
        },
        title: 'Chips',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
