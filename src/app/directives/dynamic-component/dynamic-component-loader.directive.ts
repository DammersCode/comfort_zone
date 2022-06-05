import { ChangeDetectorRef, ComponentRef, OnInit, Output } from '@angular/core';
import {
  AfterViewInit,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  ViewContainerRef,
} from '@angular/core';

import { DynamicComponentResolverService } from './dynamic-component-resolver.service';
import { DynamicComponentLoaderConfig } from './dynamic-component.model';

@Directive({
  selector: '[loadComponent]',
})
export class DynamicComponentLoaderDirective implements AfterViewInit, OnInit {
  @ContentChild('target', {
    read: ViewContainerRef,
    static: true,
  })
  target!: ViewContainerRef;

  private config!: DynamicComponentLoaderConfig;

  private componentRef!: ComponentRef<any>;
  @Input('config')
  set setConfig(value: DynamicComponentLoaderConfig) {
    this.config = value;
    this.initialize();
  }

  @Output()
  public actionTrigger = new EventEmitter<{ action: string; value: any }>();

  constructor(
    el: ElementRef,
    public componentResolver: DynamicComponentResolverService,
    public changeDetector: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.initialize();
  }

  ngAfterViewInit(): void {}

  initialize(): void {
    if (!(this.target && this.config.component)) {
      return;
    }

    if (this.componentRef === undefined) {
      this.componentRef = this.componentResolver.resolveComponent(
        this.target,
        this.config.component,
        true
      );
    }

    const hasConfigToLoad = this.config !== undefined;
    if (hasConfigToLoad) {
      const hasSetConfig =
        'setConfig' in this.componentRef.instance &&
        typeof this.componentRef.instance.setConfig === 'function';

      if (hasSetConfig) {
        this.componentRef.instance.setConfig(this.config.config);
      } else {
        this.componentRef.instance.config = this.config.config;
      }
    }

    const hasValueChangedEvent = 'valueChanged' in this.componentRef.instance;
    if (hasValueChangedEvent) {
      this.componentRef.instance.valueChanged.subscribe((newValue: any) => {
        this.actionTrigger.emit({ action: 'valueChanged', value: newValue });
      });
    }
  }
}
