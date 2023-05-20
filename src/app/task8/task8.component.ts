import { Component } from '@angular/core';

@Component({
  selector: 'app-task8',
  template: `
  <ul>
  <li *ngFor="let country of countries">
    {{ country.name }}:
    <span *ngFor="let city of country.cities">{{ city }}</span>
  </li>
</ul> `
})
export class Task8 {
  countries = [
    { name: 'Україна', cities: ['Київ', 'Львів'] },
    { name: 'Польща', cities: ['Варшава', 'Лодзь'] },
    { name: 'Великобританія', cities: ['Лондон', 'Манчестер'] }
  ];
}
