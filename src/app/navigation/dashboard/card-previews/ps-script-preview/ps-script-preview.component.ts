import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ps-script-preview',
  templateUrl: './ps-script-preview.component.html',
  styleUrls: ['./ps-script-preview.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsScriptPreview implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
