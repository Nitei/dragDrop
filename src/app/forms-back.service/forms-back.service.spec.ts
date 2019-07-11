import { TestBed } from '@angular/core/testing';

import { FormsBackService } from './forms-back.service';

describe('FormsBackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormsBackService = TestBed.get(FormsBackService);
    expect(service).toBeTruthy();
  });
});
