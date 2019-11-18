import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Git2Component } from './git2.component';

describe('Git2Component', () => {
  let component: Git2Component;
  let fixture: ComponentFixture<Git2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Git2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Git2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
