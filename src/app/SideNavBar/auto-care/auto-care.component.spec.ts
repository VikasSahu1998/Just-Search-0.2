import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCareComponent } from './auto-care.component';

describe('AutoCareComponent', () => {
  let component: AutoCareComponent;
  let fixture: ComponentFixture<AutoCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
