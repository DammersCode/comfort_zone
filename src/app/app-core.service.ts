import { NavigationService } from './services/navigation.service';
import { BreakpointsService } from './services/breakpoints.service';
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
    private BreakpointsService: BreakpointsService,
    private NavigationService: NavigationService
  ) {}
}
