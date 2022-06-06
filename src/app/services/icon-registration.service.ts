import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { icons } from 'src/assets/icons/iconPack';

@Injectable({
  providedIn: 'root',
})
export class IconRegistrationService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.registerIcons(icons);
  }

  /**
   * registerIcons
   */
  public registerIcons(icons: string[]) {
    icons.forEach((icon) => {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `./assets/icons/${icon}.svg`
        )
      );
    });
  }
}
