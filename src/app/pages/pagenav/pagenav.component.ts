import { NavigationService } from './../../navigation/services/navigation.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'pagenav',
  templateUrl: './pagenav.component.html',
  styleUrls: ['./pagenav.component.scss'],
})
export class PageNavigation {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public navigationService: NavigationService
  ) {}

  public navigateBack(): void {
    this.navigationService.back();
  }
}
