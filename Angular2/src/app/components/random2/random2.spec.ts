import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Random2 } from './random2';

describe('Random2', () => {
  let component: Random2;
  let fixture: ComponentFixture<Random2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Random2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Random2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
