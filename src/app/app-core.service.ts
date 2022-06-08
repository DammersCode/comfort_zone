import { NavigationService } from './services/navigation.service';
import { PageViewService } from './services/page-view.service';
import { IconRegistrationService } from './services/icon-registration.service';
import { Injectable } from '@angular/core';

/**
 * Core Service Registers all Core Services that needs to be included in the app
 */
@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(
    private IconRegistrationService: IconRegistrationService,
    private PageViewService: PageViewService,
    private NavigationService: NavigationService
  ) {}
}
