import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurvedhaComponent } from './ayurvedha.component';

describe('AyurvedhaComponent', () => {
  let component: AyurvedhaComponent;
  let fixture: ComponentFixture<AyurvedhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyurvedhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyurvedhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
