import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { result } from 'lodash';
import { takeUntil } from 'rxjs';
import { ImgFlipModel } from './img-flip.model';

@Component({
  selector: 'page-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.scss'],
})
export class MemesPage implements OnInit {
  private readonly apiURL: string = 'https://api.imgflip.com/get_memes';

  public memesJson: ImgFlipModel = {} as ImgFlipModel;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //TODO make it async
    const x = this.http.get(this.apiURL).pipe();

    fetch(this.apiURL).then((result) => {
      result.json().then((json) => {
        this.memesJson = json;
      });
    });
  }

  test() {
    debugger;
  }
}
