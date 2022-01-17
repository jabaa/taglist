import { TestBed } from '@angular/core/testing';
import {
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { TagService } from './tag.service';

describe('TagService', () => {
  let service: TagService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        EntityCollectionServiceElementsFactory,
        TagService
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(TagService);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
