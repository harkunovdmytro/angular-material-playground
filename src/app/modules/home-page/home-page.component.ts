import {Component} from '@angular/core';
import {menuLinks} from "../../shared/constants/menu-links.constants";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public readonly menuItems = menuLinks;
}
