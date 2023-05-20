import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  template: `
    <ul>
      <li *ngFor="let language of languages">
        <a (click)="replaceLanguage(language)">{{ language }}</a>
      </li>
    </ul>
  `
})
export class Task5 {
  languages: string[] = ['html', 'css', 'js', 'php'];

  replaceLanguage(language: string) {
    const index = this.languages.indexOf(language);
    if (index !== -1) {
      this.languages[index] = language + '+';
    }
  }
}
