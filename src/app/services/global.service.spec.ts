import { TestBed, inject } from '@angular/core/testing';

import { GlobalServiceService } from './global.service';

describe('GlobalServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalServiceService]
    });
  });

  it('should be created', inject([GlobalServiceService], (service: GlobalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
