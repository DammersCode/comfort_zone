import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  public _typeConfig = {
    typeString: [''],
    config: {
      loop: false,
      showCursor: true,
    },
  };

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => {
        //mobile
        if (matches) {
          this._typeConfig.typeString = ['Welcome to the', 'Comfort Zone'];
          this._typeConfig.config.loop = false;
          this._typeConfig.config.showCursor = false;
        }
        //desktop
        else {
          this._typeConfig.typeString = [
            'Welcome to the Comfort Zone 🤯   ',
            'Created by github/DammersCode 🕶️   ',
            'Here you can find many interesting and experimental sites / components',
            'If you find something not finished or buggy let me know',
            'If you find something that i could include leave me a message on github',
            'What do i use? ^1200 Angular v.14',
          ];
          this._typeConfig.config.loop = true;
          this._typeConfig.config.showCursor = true;
        }

        return matches;
      }),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  public typingLastStringBackspaced() {
    this._typeConfig.typeString = ['Comfort Zone'];
    this._typeConfig.config.loop = false;
    this._typeConfig.config.showCursor = false;
  }
}
