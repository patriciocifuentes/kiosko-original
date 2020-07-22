import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulmentComponent } from './annulment.component';

describe('AnnulmentComponent', () => {
  let component: AnnulmentComponent;
  let fixture: ComponentFixture<AnnulmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnulmentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnulmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
