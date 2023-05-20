import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  template: `
    <ul>
      <li *ngFor="let number of numbers">{{ number }}</li>
    </ul>
    <button (click)="reverseList()">Змінити порядок</button>
  `
})
export class Task3 {
  numbers: number[] = [1, 2, 3, 4, 5];

  reverseList() {
    this.numbers.reverse();
  }
}
