/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EducacionComponent } from './educacion.component';

describe('EducacionComponent', () => {
  let component: EducacionComponent;
  let fixture: ComponentFixture<EducacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
