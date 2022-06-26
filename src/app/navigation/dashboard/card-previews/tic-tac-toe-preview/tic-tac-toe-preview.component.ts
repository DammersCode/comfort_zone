import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'tic-tac-toe-preview',
  templateUrl: './tic-tac-toe-preview.component.html',
  styleUrls: ['./tic-tac-toe-preview.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicTacToePreview implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
