import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { takeUntil, Observable, Subject } from 'rxjs';
import { ImgFlipModel } from './img-flip.model';

@Component({
  selector: 'page-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.scss'],
})
export class MemesPage implements OnInit {
  //TODO cards lazy load with picture
  private readonly apiURL: string = 'https://api.imgflip.com/get_memes';

  public memesJson: Subject<ImgFlipModel> = new Subject();

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    fetch(this.apiURL).then((result) => {
      result.json().then((json) => {
        this.memesJson.next(json);
      });
    });
  }

  onCopied() {
    this.snackBar.open('Copied', undefined, {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'snackbar',
    });
  }
}
