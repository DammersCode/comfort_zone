import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';

@Injectable()
export class DynamicComponentResolverService {
  constructor(public compiler: ComponentFactoryResolver) {}

  public resolveComponent(
    target: ViewContainerRef,
    component: any,
    clearBefore: boolean
  ): ComponentRef<any> {
    if (clearBefore) {
      this.clearTarget(target);
    }

    const componentFactory = this.compiler.resolveComponentFactory(component);
    const componentRef = target.createComponent(
      componentFactory
    ) as ComponentRef<any>;
    return componentRef;
  }

  public clearTarget(target: ViewContainerRef): void {
    if (target && target.length > 0) {
      target.remove(0);
    }
  }
}
