import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessHomeComponent } from './business-home.component';

describe('BusinessHomeComponent', () => {
  let component: BusinessHomeComponent;
  let fixture: ComponentFixture<BusinessHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
