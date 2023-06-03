import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationPageComponent } from './application-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";

const declarations = [ApplicationPageComponent];

@NgModule({
  declarations: [
    ...declarations,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [
    ...declarations,
  ],
  bootstrap: [ApplicationPageComponent]
})
export class ApplicationModule {
}
