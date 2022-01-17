import { TestBed } from '@angular/core/testing';
import {
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        EntityCollectionServiceElementsFactory,
        ItemService
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(ItemService);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
