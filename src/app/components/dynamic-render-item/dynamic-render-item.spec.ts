import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRenderItem } from './dynamic-render-item';

describe('DynamicRenderItem', () => {
  let component: DynamicRenderItem;
  let fixture: ComponentFixture<DynamicRenderItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicRenderItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicRenderItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
