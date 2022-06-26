import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'live-chat-preview',
  templateUrl: './live-chat-preview.component.html',
  styleUrls: ['./live-chat-preview.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiveChatPreview implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
