import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxPageRoutingModule } from './checkbox-page-routing.module';
import { CheckboxPageComponent } from './checkbox-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [CheckboxPageComponent],
  imports: [
    CommonModule,
    CheckboxPageRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
})
export class CheckboxPageModule {}
