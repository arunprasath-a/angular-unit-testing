import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiosFetchComponent } from './axios-fetch.component';

describe('AxiosFetchComponent', () => {
  let component: AxiosFetchComponent;
  let fixture: ComponentFixture<AxiosFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiosFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiosFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
