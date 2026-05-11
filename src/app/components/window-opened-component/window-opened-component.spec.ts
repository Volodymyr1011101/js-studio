import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowOpenedComponent } from './window-opened-component';

describe('WindowOpenedComponent', () => {
  let component: WindowOpenedComponent;
  let fixture: ComponentFixture<WindowOpenedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowOpenedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowOpenedComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
