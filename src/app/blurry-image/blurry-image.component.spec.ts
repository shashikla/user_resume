import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurryImageComponent } from './blurry-image.component';

describe('BlurryImageComponent', () => {
  let component: BlurryImageComponent;
  let fixture: ComponentFixture<BlurryImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlurryImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlurryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
