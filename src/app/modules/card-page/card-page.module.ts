import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardPageRoutingModule } from './card-page-routing.module';
import { CardPageComponent } from './card-page.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CardPageComponent],
  imports: [
    CommonModule,
    CardPageRoutingModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class CardPageModule {}
