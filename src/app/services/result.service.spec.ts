import { TestBed } from '@angular/core/testing';

import { ResultService } from './result.service';

describe('ResultService', () => {
  let service: ResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a score', () => {
    expect(service.score).toBeDefined();
  });

  xdescribe('getScore', () => {
    it('returns the score'), () => {
      let score = service.score
      expect(service.getScore()).toBe(score)
    };
  });

  describe('increaseScore', () => {
    it('increases the score'), () => {
      let score = service.score
      expect(service.increaseScore()).toBe(score + 1)
    };
  });
});
