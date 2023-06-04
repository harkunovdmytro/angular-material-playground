import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompletePageRoutingModule } from './autocomplete-page-routing.module';
import { AutocompletePageComponent } from './autocomplete-page.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [AutocompletePageComponent],
  imports: [
    CommonModule,
    AutocompletePageRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
})
export class AutocompletePageModule {}
