import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2ChartsExampleComponent } from './ng2-charts-example.component';

describe('Ng2ChartsExampleComponent', () => {
  let component: Ng2ChartsExampleComponent;
  let fixture: ComponentFixture<Ng2ChartsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2ChartsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2ChartsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
