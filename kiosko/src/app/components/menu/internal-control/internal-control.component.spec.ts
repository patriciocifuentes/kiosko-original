import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalControlComponent } from './internal-control.component';

describe('InternalControlComponent', () => {
  let component: InternalControlComponent;
  let fixture: ComponentFixture<InternalControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalControlComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
