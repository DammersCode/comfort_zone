import { BreakpointsService } from '../../services/breakpoints.service';
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
  //TODO infinite scroll
  public readonly apiURLs = {
    getMemes: 'https://api.imgflip.com/get_memes',
    memeGenerator: 'https://imgflip.com/memegenerator/',
  };

  public memesJson$: Subject<ImgFlipModel> = new Subject();

  public isHandset$ = this.pageViewService.isHandset$;

  constructor(
    private snackBar: MatSnackBar,
    private pageViewService: BreakpointsService
  ) {}

  ngOnInit(): void {
    this.isHandset$.subscribe((handset) => {
      if (handset) {
      } else {
      }
    });

    fetch(this.apiURLs.getMemes).then((result) => {
      result.json().then((json) => {
        this.memesJson$.next(json);
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
