import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { UnsubscriberComponent } from './shared/components/unsubscriber/unsubscriber.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonPageComponent } from './modules/mat-button-page/mat-button-page.component';
import { MatButtonModule } from '@angular/material/button';
import { ChipsPageComponent } from './modules/chips-page/chips-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UnsubscriberComponent,
    MatButtonPageComponent,
    ChipsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
