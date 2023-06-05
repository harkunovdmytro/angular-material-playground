import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgePageRoutingModule } from './badge-page-routing.module';
import { BadgePageComponent } from './badge-page.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BadgePageComponent],
  imports: [
    CommonModule,
    BadgePageRoutingModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatButtonModule,
  ],
})
export class BadgePageModule {}
