import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitTestComponentComponent } from './git-test-component.component';

describe('GitTestComponentComponent', () => {
  let component: GitTestComponentComponent;
  let fixture: ComponentFixture<GitTestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitTestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
