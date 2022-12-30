import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoMobileComponent } from './auto-mobile.component';

describe('AutoMobileComponent', () => {
  let component: AutoMobileComponent;
  let fixture: ComponentFixture<AutoMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
