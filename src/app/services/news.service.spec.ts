import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewsService', () => {
  let service: NewsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
