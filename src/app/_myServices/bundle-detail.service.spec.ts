import { TestBed } from '@angular/core/testing';

import { BundleDetailService } from './bundle-detail.service';

describe('BundleDetailService', () => {
  let service: BundleDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundleDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
