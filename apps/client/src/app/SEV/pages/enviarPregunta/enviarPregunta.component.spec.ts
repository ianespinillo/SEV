/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnviarPreguntaComponent } from './enviarPregunta.component';

describe('EnviarPreguntaComponent', () => {
  let component: EnviarPreguntaComponent;
  let fixture: ComponentFixture<EnviarPreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarPreguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
