import { BreakpointsService } from './../../../../services/breakpoints.service';
import { ImgFlipModel, Meme } from './../../../../pages/memes/img-flip.model';

import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'memes-preview',
  templateUrl: './memes-preview.component.html',
  styleUrls: ['./memes-preview.component.scss'],
})
export class MemesPreviewComponent implements OnInit {
  private apiURLs = 'https://api.imgflip.com/get_memes';
  public memes: Meme[] = [];

  constructor(public breakpointsService: BreakpointsService) {
    this.breakpointsService.isXLarge$;
  }

  ngOnInit(): void {
    fetch(this.apiURLs).then((result) => {
      result.json().then((json: ImgFlipModel) => {
        if (json) {
          const memes = json.data.memes;
          if (memes) {
            this.memes.push(_.sample(memes) ?? ({} as Meme));
            this.memes.push(_.sample(memes) ?? ({} as Meme));
          }
        }
      });
    });
  }
}
