import { CocktailsPage } from './cocktails.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailsRoutingModule } from './cocktails-routing.module';

@NgModule({
  declarations: [CocktailsPage],
  imports: [CommonModule, CocktailsRoutingModule],
})
export class CocktailsModule {}
