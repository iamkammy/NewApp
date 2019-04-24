import { TestBed } from '@angular/core/testing';

import { GitdataService } from './gitdata.service';

describe('GitdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitdataService = TestBed.get(GitdataService);
    expect(service).toBeTruthy();
  });
});
