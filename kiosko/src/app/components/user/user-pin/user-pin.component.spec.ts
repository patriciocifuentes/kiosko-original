import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPinComponent } from './user-pin.component';

describe('UserPinComponent', () => {
  let component: UserPinComponent;
  let fixture: ComponentFixture<UserPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPinComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
