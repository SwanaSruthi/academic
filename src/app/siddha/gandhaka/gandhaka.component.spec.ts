import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GandhakaComponent } from './gandhaka.component';

describe('GandhakaComponent', () => {
  let component: GandhakaComponent;
  let fixture: ComponentFixture<GandhakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GandhakaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GandhakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
