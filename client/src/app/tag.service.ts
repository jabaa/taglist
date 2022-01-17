import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Tag } from './tag';

@Injectable({ providedIn: 'root' })
export class TagService extends EntityCollectionServiceBase<Tag> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Tag', serviceElementsFactory);
  }
}
