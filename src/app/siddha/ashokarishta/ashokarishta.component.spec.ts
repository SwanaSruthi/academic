import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshokarishtaComponent } from './ashokarishta.component';

describe('AshokarishtaComponent', () => {
  let component: AshokarishtaComponent;
  let fixture: ComponentFixture<AshokarishtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshokarishtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AshokarishtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
