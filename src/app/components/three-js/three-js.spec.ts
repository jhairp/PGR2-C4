import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeJS } from './three-js';

describe('ThreeJS', () => {
  let component: ThreeJS;
  let fixture: ComponentFixture<ThreeJS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeJS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeJS);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
