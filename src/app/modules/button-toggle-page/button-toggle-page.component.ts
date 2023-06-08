import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonToggleAppearance } from '@angular/material/button-toggle';

@Component({
  selector: 'app-button-toggle-page',
  templateUrl: './button-toggle-page.component.html',
  styleUrls: ['./button-toggle-page.component.scss'],
})
export class ButtonTogglePageComponent {
  public fontStyle = 'bold';
  public fontStyleControl = new FormControl('bold');
  public disabled = false;
  public appearanceControl = new FormControl<MatButtonToggleAppearance>(
    'legacy'
  );
}
