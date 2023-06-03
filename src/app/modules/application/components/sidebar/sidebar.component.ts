import { Component, ViewChild } from '@angular/core';
import { IMenuLink } from '../../../../shared/interfaces/menu-link.interface';
import { menuLinks } from '../../../../shared/constants/menu-links.constants';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public menuItems: IMenuLink[] = menuLinks;

  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  shouldRun = true;
}
