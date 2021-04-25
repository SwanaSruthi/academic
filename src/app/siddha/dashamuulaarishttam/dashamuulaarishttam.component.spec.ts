import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashamuulaarishttamComponent } from './dashamuulaarishttam.component';

describe('DashamuulaarishttamComponent', () => {
  let component: DashamuulaarishttamComponent;
  let fixture: ComponentFixture<DashamuulaarishttamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashamuulaarishttamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashamuulaarishttamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
