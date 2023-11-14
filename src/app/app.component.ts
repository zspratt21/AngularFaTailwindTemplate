import { Component } from '@angular/core';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faAngular} from "@fortawesome/free-brands-svg-icons";
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import {faCopyright} from "@fortawesome/free-regular-svg-icons";
import {TitleService} from "./services/title.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFaTailwindTemplate';

  constructor(library: FaIconLibrary, private titleService: TitleService) {
    library.addIcons(faAngular);
    library.addIcons(faSun);
    library.addIcons(faMoon);
    library.addIcons(faCopyright);

    this.titleService.currentTitle.subscribe(title => {
      this.title = title;
    });

    const darkModePreference = localStorage.getItem('darkMode') === 'true';
    this.toggleDarkTheme(darkModePreference);
  }

  toggleDarkTheme(isDarkMode: boolean): void {
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
    document.documentElement.classList.toggle('tw-dark', isDarkMode);
  }

  protected readonly currentYear: number = new Date().getFullYear();
  protected readonly faAngular = faAngular;
  protected readonly faSun = faSun;
  protected readonly faMoon = faMoon;
  protected readonly localStorage = localStorage;
}
