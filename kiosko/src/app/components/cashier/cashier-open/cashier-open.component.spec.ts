import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierOpenComponent } from './cashier-open.component';

describe('CashierOpenComponent', () => {
  let component: CashierOpenComponent;
  let fixture: ComponentFixture<CashierOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierOpenComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
