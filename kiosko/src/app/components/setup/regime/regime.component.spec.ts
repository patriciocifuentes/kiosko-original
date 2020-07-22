import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimeComponent } from './regime.component';

describe('RegimeComponent', () => {
  let component: RegimeComponent;
  let fixture: ComponentFixture<RegimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegimeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
