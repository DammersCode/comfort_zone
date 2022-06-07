import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemesPreviewComponent } from './memes-preview.component';

describe('MemesPreviewComponent', () => {
  let component: MemesPreviewComponent;
  let fixture: ComponentFixture<MemesPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemesPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
