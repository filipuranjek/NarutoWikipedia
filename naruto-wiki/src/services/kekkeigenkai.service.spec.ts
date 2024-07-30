import { TestBed } from '@angular/core/testing';

import { KekkeigenkaiService } from './kekkeigenkai.service';

describe('KekkeigenkaiService', () => {
  let service: KekkeigenkaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KekkeigenkaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
