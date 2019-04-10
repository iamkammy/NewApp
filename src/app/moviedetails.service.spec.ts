import { TestBed } from '@angular/core/testing';

import { MoviedetailsService } from './moviedetails.service';

describe('MoviedetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviedetailsService = TestBed.get(MoviedetailsService);
    expect(service).toBeTruthy();
  });
});
