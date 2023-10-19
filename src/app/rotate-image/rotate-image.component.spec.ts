import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateImageComponent } from './rotate-image.component';

describe('RotateImageComponent', () => {
  let component: RotateImageComponent;
  let fixture: ComponentFixture<RotateImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotateImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotateImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
