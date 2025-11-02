import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleEffect } from './particle-effect';

describe('ParticleEffect', () => {
  let component: ParticleEffect;
  let fixture: ComponentFixture<ParticleEffect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticleEffect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticleEffect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
