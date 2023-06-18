import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ThemePalette } from '@angular/material/core';

export interface Fruit {
  name: string;
}

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-chips-page',
  templateUrl: './chips-page.component.html',
  styleUrls: ['./chips-page.component.scss'],
})
export class ChipsPageComponent {
  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
  announcer = inject(LiveAnnouncer);

  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  autocompleteFruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  availableColors: ChipColor[] = [
    { name: 'none', color: undefined },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' },
  ];
  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allFruits.slice()
      )
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }

  // autocomplete example

  autocompleteAdd(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.autocompleteFruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  autocompleteRemove(fruit: string): void {
    const index = this.autocompleteFruits.indexOf(fruit);

    if (index >= 0) {
      this.autocompleteFruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  autocompleteSelected(event: MatAutocompleteSelectedEvent): void {
    this.autocompleteFruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter((fruit) =>
      fruit.toLowerCase().includes(filterValue)
    );
  }
}
