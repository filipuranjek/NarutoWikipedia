import { TestBed } from '@angular/core/testing';

import { TailedbService } from './tailedb.service';

describe('TailedbService', () => {
  let service: TailedbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TailedbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
