import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsPreviewComponent } from './cocktails-preview.component';

describe('CocktailsPreviewComponent', () => {
  let component: CocktailsPreviewComponent;
  let fixture: ComponentFixture<CocktailsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
