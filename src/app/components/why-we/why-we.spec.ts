import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWe } from './why-we';

describe('WhyWe', () => {
  let component: WhyWe;
  let fixture: ComponentFixture<WhyWe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyWe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
