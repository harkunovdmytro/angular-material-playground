import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-badge-page',
  templateUrl: './badge-page.component.html',
  styleUrls: ['./badge-page.component.scss'],
})
export class BadgePageComponent {
  public hidden = false;
  public badgeForm = new FormGroup({
    badgeValue: new FormControl<number | null>(0),
    size: new FormControl<number | null>(0),
    position: new FormControl<number | null>(0),
    color: new FormControl<number | null>(0),
    overlap: new FormControl<boolean | null>(false),
    disabled: new FormControl<boolean | null>(false),
  });

  public get bargeSize(): 'small' | 'medium' | 'large' {
    switch (this.badgeForm.value.size) {
      case 0:
        return 'small';
      case 1:
        return 'medium';
      case 2:
        return 'large';
      default:
        return 'small';
    }
  }

  public get bargePosition():
    | 'above after'
    | 'above before'
    | 'below before'
    | 'below after'
    | 'before'
    | 'after'
    | 'above'
    | 'below' {
    switch (this.badgeForm.value.position) {
      case 0:
        return 'above after';
      case 1:
        return 'above before';
      case 2:
        return 'below before';
      case 3:
        return 'below after';
      case 4:
        return 'before';
      case 5:
        return 'after';
      case 6:
        return 'above';
      case 7:
        return 'before';
      default:
        return 'after';
    }
  }

  public get bargeColor(): 'primary' | 'accent' | 'warn' | undefined {
    switch (this.badgeForm.value.color) {
      case 0:
        return 'primary';
      case 1:
        return 'accent';
      case 2:
        return 'warn';
      default:
        return undefined;
    }
  }
}
