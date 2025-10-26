import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortInfo } from './short-info';

describe('ShortInfo', () => {
  let component: ShortInfo;
  let fixture: ComponentFixture<ShortInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
