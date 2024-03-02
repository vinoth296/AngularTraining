import { TestBed } from '@angular/core/testing';

import { HttpintrService } from './httpintr.service';
import { TemplateRef, ViewContainerRef } from '@angular/core';

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
