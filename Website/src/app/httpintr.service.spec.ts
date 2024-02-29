import { TestBed } from '@angular/core/testing';

import { HttpintrService } from './httpintr.service';

describe('HttpintrService', () => {
  let service: HttpintrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpintrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
