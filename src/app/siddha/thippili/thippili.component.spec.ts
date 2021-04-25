import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThippiliComponent } from './thippili.component';

describe('ThippiliComponent', () => {
  let component: ThippiliComponent;
  let fixture: ComponentFixture<ThippiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThippiliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThippiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
