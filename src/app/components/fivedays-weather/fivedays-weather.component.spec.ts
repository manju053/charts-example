import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivedaysWeatherComponent } from './fivedays-weather.component';

describe('FivedaysWeatherComponent', () => {
  let component: FivedaysWeatherComponent;
  let fixture: ComponentFixture<FivedaysWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivedaysWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivedaysWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
