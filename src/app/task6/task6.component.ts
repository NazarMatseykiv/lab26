import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>
    <button *ngIf="showButton" (click)="addUser()">Додати користувача</button>
  `
})
export class Task6 {
  users: string[] = ['Микола', 'Василь', 'Петро'];
  additionalUsers: string[] = ['Аня', 'Валя', 'Маша'];
  showButton = true;

  addUser() {
    if (this.additionalUsers.length > 0) {
      const useradd = this.additionalUsers.shift();
      if (useradd !== undefined) {
        this.users.push(useradd);
      }
    }

    if (this.additionalUsers.length === 0) {
      this.users.sort();
      this.showButton = false;
    }
  }
}
