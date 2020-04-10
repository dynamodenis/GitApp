import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitappComponent } from './gitapp.component';

describe('GitappComponent', () => {
  let component: GitappComponent;
  let fixture: ComponentFixture<GitappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
