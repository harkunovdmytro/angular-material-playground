import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { filter, first, takeUntil } from 'rxjs';
import { UnsubscriberComponent } from '../../shared/components/unsubscriber/unsubscriber.component';
import { menuLinks } from '../../shared/constants/menu-links.constants';
import { ActivatedRoute, ActivationStart, Router } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.scss'],
})
export class ApplicationPageComponent
  extends UnsubscriberComponent
  implements OnInit
{
  public events: string[] = [];
  public opened = false;
  public isMobile = false;
  public header = '';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super();
  }

  public ngOnInit(): void {
    this.breakpointObserver
      .observe(`(max-width: ${600}px)`)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ matches }) => {
        this.isMobile = matches;
      });
    this.router.events
      .pipe(
        takeUntil(this.unsubscribe),
        filter(
          (event) =>
            event instanceof ActivationStart && event.snapshot.data['title']
        )
      )
      .subscribe((event) => {
        this.header = (event as ActivationStart).snapshot.data['title'];
      });

    this.activatedRoute.firstChild?.title
      .pipe(takeUntil(this.unsubscribe), first())
      .subscribe((title) => (this.header = title + ''));
  }

  protected readonly menuLinks = menuLinks;
}
