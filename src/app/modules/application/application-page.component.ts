import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {takeUntil} from "rxjs";
import {UnsubscriberComponent} from "../../shared/components/unsubscriber/unsubscriber.component";
import {menuLinks} from "../../shared/constants/menu-links.constants";

@Component({
  selector: 'app-application',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.scss']
})
export class ApplicationPageComponent extends UnsubscriberComponent implements OnInit {
  events: string[] = [];
  opened = false;
  isMobile = false;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    super();
  }

  public ngOnInit(): void {
    this.breakpointObserver
      .observe(`(max-width: ${600}px)`)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({matches}) => {
        this.isMobile = matches;
      })
  }

  protected readonly menuLinks = menuLinks;
}
