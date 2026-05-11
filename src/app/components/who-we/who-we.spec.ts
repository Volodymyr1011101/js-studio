import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWe } from './who-we';

describe('WhoWe', () => {
  let component: WhoWe;
  let fixture: ComponentFixture<WhoWe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoWe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoWe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
