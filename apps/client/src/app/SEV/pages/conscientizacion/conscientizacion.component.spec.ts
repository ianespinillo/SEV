/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConscientizacionComponent } from './conscientizacion.component';

describe('ConscientizacionComponent', () => {
  let component: ConscientizacionComponent;
  let fixture: ComponentFixture<ConscientizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConscientizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConscientizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
