import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupReadyComponent } from './setup-ready.component';

describe('SetupReadyComponent', () => {
  let component: SetupReadyComponent;
  let fixture: ComponentFixture<SetupReadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupReadyComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
