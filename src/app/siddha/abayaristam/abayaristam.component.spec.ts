import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbayaristamComponent } from './abayaristam.component';

describe('AbayaristamComponent', () => {
  let component: AbayaristamComponent;
  let fixture: ComponentFixture<AbayaristamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbayaristamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbayaristamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
