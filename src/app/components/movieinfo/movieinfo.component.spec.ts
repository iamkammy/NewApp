import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieinfoComponent } from './movieinfo.component';

describe('MovieinfoComponent', () => {
  let component: MovieinfoComponent;
  let fixture: ComponentFixture<MovieinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
