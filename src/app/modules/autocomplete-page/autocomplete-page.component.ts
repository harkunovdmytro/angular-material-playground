import { Component } from '@angular/core';
import { autocompleteOptions } from '../../shared/constants/autocomplete-options.constant';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-autocomplete-page',
  templateUrl: './autocomplete-page.component.html',
  styleUrls: ['./autocomplete-page.component.scss'],
})
export class AutocompletePageComponent {
  public readonly options: string[] = autocompleteOptions;
  public autocompleteControl = new FormControl('');
  public autocompleteForm = new FormGroup({
    placeholder: new FormControl(),
    label: new FormControl(),
    isCustomWidth: new FormControl<boolean | null>(false),
    panelWidth: new FormControl<number | null>(null),
  });

  public get filteredOptions(): string[] {
    return this.options.filter((option) =>
      option
        .toLowerCase()
        .includes(`${this.autocompleteControl.value?.toLowerCase()}`)
    );
  }
}
