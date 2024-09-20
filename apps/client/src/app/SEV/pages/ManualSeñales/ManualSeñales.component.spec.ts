/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ManualSeñalesComponent } from './ManualSeñales.component';

describe('ManualSeñalesComponent', () => {
  let component: ManualSeñalesComponent;
  let fixture: ComponentFixture<ManualSeñalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualSeñalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualSeñalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
