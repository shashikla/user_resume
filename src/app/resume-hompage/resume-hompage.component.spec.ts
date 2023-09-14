import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeHompageComponent } from './resume-hompage.component';

describe('ResumeHompageComponent', () => {
  let component: ResumeHompageComponent;
  let fixture: ComponentFixture<ResumeHompageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeHompageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeHompageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
