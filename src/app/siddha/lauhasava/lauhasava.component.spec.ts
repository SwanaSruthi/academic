import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LauhasavaComponent } from './lauhasava.component';

describe('LauhasavaComponent', () => {
  let component: LauhasavaComponent;
  let fixture: ComponentFixture<LauhasavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LauhasavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LauhasavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
