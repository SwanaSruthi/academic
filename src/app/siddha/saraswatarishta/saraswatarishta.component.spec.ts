import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaraswatarishtaComponent } from './saraswatarishta.component';

describe('SaraswatarishtaComponent', () => {
  let component: SaraswatarishtaComponent;
  let fixture: ComponentFixture<SaraswatarishtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaraswatarishtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaraswatarishtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
