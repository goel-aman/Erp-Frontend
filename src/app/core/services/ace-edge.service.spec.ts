/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AceEdgeService } from './ace-edge.service';

describe('Service: AceEdgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AceEdgeService]
    });
  });

  it('should ...', inject([AceEdgeService], (service: AceEdgeService) => {
    expect(service).toBeTruthy();
  }));
});
