import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FormBuilder } from '@angular/forms';

export interface ITask {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: ITask[];
}

@Component({
  selector: 'app-checkbox-page',
  templateUrl: './checkbox-page.component.html',
  styleUrls: ['./checkbox-page.component.scss'],
})
export class CheckboxPageComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  colorRange = 0;

  task: ITask = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Primary', completed: false, color: 'primary' },
      { name: 'Accent', completed: false, color: 'accent' },
      { name: 'Warn', completed: false, color: 'warn' },
    ],
  };

  allComplete: boolean = false;

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  constructor(private _formBuilder: FormBuilder) {}

  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }

  public get color(): ThemePalette {
    switch (this.colorRange) {
      case 0:
        return 'primary';
      case 1:
        return 'accent';
      case 2:
        return 'warn';
      default:
        return 'primary';
    }
  }
}
