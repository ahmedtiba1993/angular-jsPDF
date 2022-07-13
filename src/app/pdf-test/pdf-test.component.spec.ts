/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PdfTestComponent } from './pdf-test.component';

describe('PdfTestComponent', () => {
  let component: PdfTestComponent;
  let fixture: ComponentFixture<PdfTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
