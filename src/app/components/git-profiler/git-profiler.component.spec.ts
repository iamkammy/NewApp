import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProfilerComponent } from './git-profiler.component';

describe('GitProfilerComponent', () => {
  let component: GitProfilerComponent;
  let fixture: ComponentFixture<GitProfilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitProfilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitProfilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
