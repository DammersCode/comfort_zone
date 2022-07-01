import { CoreService } from './app-core.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private CoreService: CoreService) {}

  title = 'Comfort Zone';
}
