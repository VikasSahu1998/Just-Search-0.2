import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyCareComponent } from './baby-care.component';

describe('BabyCareComponent', () => {
  let component: BabyCareComponent;
  let fixture: ComponentFixture<BabyCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
