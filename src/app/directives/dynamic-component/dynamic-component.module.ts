import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentLoaderDirective } from './dynamic-component-loader.directive';
import { DynamicComponentResolverService } from './dynamic-component-resolver.service';

@NgModule({
  declarations: [DynamicComponentLoaderDirective],
  imports: [CommonModule],
  exports: [DynamicComponentLoaderDirective],
  providers: [DynamicComponentResolverService],
})
export class DynamicComponentModule {}

export * from './dynamic-component-loader.directive';
export * from './dynamic-component-resolver.service';
export * from './dynamic-component.model';
