import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingHomePageComponent } from './training-home-page.component';

describe('TrainingHomePageComponent', () => {
  let component: TrainingHomePageComponent;
  let fixture: ComponentFixture<TrainingHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
