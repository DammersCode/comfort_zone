import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'page-py-script',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Tip: press Shift-ENTER to evaluate a cell</p>
    <p>
      Note: you can only use the standard
      <a
        style="color: #69f0ae; text-decoration: underline;"
        href="https://docs.python.org/3/library/index.html"
        target="_blank"
        >python library</a
      >
    </p>

    <div style="background-color: #f5f5f5; padding: 0.25rem;">
      <py-repl
        style="background-color: white; color: black;"
        id="my-repl"
        auto-generate="true"
      >
      </py-repl>
    </div>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PyScriptPage implements OnInit {
  constructor() {}

  public editorOptions: any = { theme: 'vs-dark', language: 'python' };
  public code: any;

  ngOnInit(): void {}
}
