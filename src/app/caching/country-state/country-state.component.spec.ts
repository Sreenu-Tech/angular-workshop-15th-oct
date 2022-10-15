import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStateComponent } from './country-state.component';

describe('CountryStateComponent', () => {
  let component: CountryStateComponent;
  let fixture: ComponentFixture<CountryStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
