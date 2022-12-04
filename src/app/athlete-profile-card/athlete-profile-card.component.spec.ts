import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteProfileCardComponent } from './athlete-profile-card.component';

describe('AthleteProfileCardComponent', () => {
  let component: AthleteProfileCardComponent;
  let fixture: ComponentFixture<AthleteProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteProfileCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
