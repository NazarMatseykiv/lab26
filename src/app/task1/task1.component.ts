import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  template: `
    <div>
      <span *ngFor="let number of numbers">{{ number + 3 }}</span>
    </div>
  `
})
export class Task1 {
  numbers: number[] = [1, 2, 3, 4, 5];
}
