import { IconRegistrationService } from './services/icon-registration.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private IconRegistrationService: IconRegistrationService) {
    this.IconRegistrationService.registerIcons();
  }
  title = 'comfort_zone';
}
