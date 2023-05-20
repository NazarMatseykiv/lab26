import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  template: `
    <div>
      <span *ngFor="let number of numbers">{{ number * number }}</span>
    </div>
  `
})
export class Task2 {
  numbers: number[] = [1, 2, 3, 4, 5];
}
