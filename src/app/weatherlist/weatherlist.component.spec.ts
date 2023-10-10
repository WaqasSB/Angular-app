import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherlistComponent } from './weatherlist.component';

describe('WeatherlistComponent', () => {
  let component: WeatherlistComponent;
  let fixture: ComponentFixture<WeatherlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherlistComponent]
    });
    fixture = TestBed.createComponent(WeatherlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
