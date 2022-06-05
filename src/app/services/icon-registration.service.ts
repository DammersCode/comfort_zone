import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconRegistrationService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  /**
   * registerIcons
   */
  public registerIcons() {
    this.iconRegistry.addSvgIcon(
      'cocktail',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        './assets/icons/cocktail.svg'
      )
    );
  }
}
