import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonTogglePageRoutingModule } from './button-toggle-page-routing.module';
import { ButtonTogglePageComponent } from './button-toggle-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonTogglePageComponent],
  imports: [
    CommonModule,
    ButtonTogglePageRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ButtonTogglePageModule {}
