/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardNoticiaComponent } from './card-noticia.component';

describe('CardNoticiaComponent', () => {
  let component: CardNoticiaComponent;
  let fixture: ComponentFixture<CardNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
