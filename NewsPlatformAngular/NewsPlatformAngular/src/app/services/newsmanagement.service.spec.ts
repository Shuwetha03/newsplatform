import { TestBed } from '@angular/core/testing';

import { NewsmanagementService } from './newsmanagement.service';

describe('NewsmanagementService', () => {
  let service: NewsmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
