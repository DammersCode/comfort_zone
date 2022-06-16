import { MatButtonModule } from '@angular/material/button';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MemesPage } from './memes.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatCardModule } from '@angular/material/card';

import { MemesRoutingModule } from './memes-routing.module';

/**
 * @required aos V.2
 */
@NgModule({
  declarations: [MemesPage],
  imports: [
    CommonModule,
    MemesRoutingModule,
    ClipboardModule,
    MatCardModule,
    LazyLoadImageModule,
    MatButtonModule,
  ],
})
export class MemesModule {}
