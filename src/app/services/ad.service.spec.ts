import { TestBed, inject } from '@angular/core/testing';

import { AdService } from './ad.service';

describe('AdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdService]
    });
  });

  it('should ...', inject([AdService], (service: AdService) => {
    expect(service).toBeTruthy();
  }));
});
