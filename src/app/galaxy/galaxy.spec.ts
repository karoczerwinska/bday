import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Galaxy } from './galaxy';

describe('Galaxy', () => {
  let component: Galaxy;
  let fixture: ComponentFixture<Galaxy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Galaxy],
    }).compileComponents();

    fixture = TestBed.createComponent(Galaxy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
