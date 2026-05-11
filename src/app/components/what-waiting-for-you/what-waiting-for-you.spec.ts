import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWaitingForYou } from './what-waiting-for-you';

describe('WhatWaitingForYou', () => {
  let component: WhatWaitingForYou;
  let fixture: ComponentFixture<WhatWaitingForYou>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWaitingForYou]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWaitingForYou);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
