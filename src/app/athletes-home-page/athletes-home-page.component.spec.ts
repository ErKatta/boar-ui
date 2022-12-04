import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletesHomePageComponent } from './athletes-home-page.component';

describe('AthletesHomePageComponent', () => {
  let component: AthletesHomePageComponent;
  let fixture: ComponentFixture<AthletesHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthletesHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthletesHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
