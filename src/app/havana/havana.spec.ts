import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Havana } from './havana';

describe('Havana', () => {
  let component: Havana;
  let fixture: ComponentFixture<Havana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Havana],
    }).compileComponents();

    fixture = TestBed.createComponent(Havana);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
