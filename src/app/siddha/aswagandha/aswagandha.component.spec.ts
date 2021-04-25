import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AswagandhaComponent } from './aswagandha.component';

describe('AswagandhaComponent', () => {
  let component: AswagandhaComponent;
  let fixture: ComponentFixture<AswagandhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AswagandhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AswagandhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
