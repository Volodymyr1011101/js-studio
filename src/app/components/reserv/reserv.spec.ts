import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reserv } from './reserv';

describe('Reserv', () => {
  let component: Reserv;
  let fixture: ComponentFixture<Reserv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reserv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reserv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
