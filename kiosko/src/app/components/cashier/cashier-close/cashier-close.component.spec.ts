import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierCloseComponent } from './cashier-close.component';

describe('CashierCloseComponent', () => {
  let component: CashierCloseComponent;
  let fixture: ComponentFixture<CashierCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierCloseComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
