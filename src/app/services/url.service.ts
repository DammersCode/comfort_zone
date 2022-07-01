import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  public currentPath: string = '';

  constructor(private location: Location) {
    this.location.onUrlChange((val) => {
      this.currentPath = val;
    });
  }
}
