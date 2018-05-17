import { TestBed, inject } from '@angular/core/testing';

import { ApiProjectService } from './api-project.service';

describe('ApiProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiProjectService]
    });
  });

  it('should be created', inject([ApiProjectService], (service: ApiProjectService) => {
    expect(service).toBeTruthy();
  }));
});
