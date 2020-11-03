import { TestBed } from '@angular/core/testing';

import { IsraelLibraryService } from './israel-library.service';

describe('IsraelLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsraelLibraryService = TestBed.get(IsraelLibraryService);
    expect(service).toBeTruthy();
  });
});
