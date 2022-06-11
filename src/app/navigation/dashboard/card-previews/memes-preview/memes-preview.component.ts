import { ImgFlipModel, Meme } from './../../../../pages/memes/img-flip.model';
import { MemesPage } from './../../../../pages/memes/memes.component';
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

  constructor() {}

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
