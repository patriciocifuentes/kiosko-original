import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInOutComponent } from './cash-in-out.component';

describe('CashInOutComponent', () => {
  let component: CashInOutComponent;
  let fixture: ComponentFixture<CashInOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashInOutComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
