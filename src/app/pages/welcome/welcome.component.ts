import { Component } from '@angular/core';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {TitleService} from "../../services/title.service";
import {faFontAwesomeFlag} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private titleService: TitleService, library: FaIconLibrary) {
    library.addIcons(faFontAwesomeFlag);
  }

  ngOnInit(): void {
    this.titleService.setTitle('Welcome');
  }
}
