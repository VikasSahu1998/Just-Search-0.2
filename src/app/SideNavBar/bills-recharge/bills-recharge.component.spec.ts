import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsRechargeComponent } from './bills-recharge.component';

describe('BillsRechargeComponent', () => {
  let component: BillsRechargeComponent;
  let fixture: ComponentFixture<BillsRechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsRechargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillsRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
