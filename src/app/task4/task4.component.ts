import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  template: `
    <ul>
      <li *ngFor="let number of numbers">{{ number }}</li>
    </ul>
    <button (click)="sortList()">Сортувати</button>
  `
})
export class Task4 {
  numbers: number[] = [5, 2, 4, 1, 3];

  sortList() {
    this.numbers.sort((a, b) => a - b);
  }
}
