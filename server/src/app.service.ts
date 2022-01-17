import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateItemDto, Item } from './item.entity';
import { CreateTagDto, Tag } from './tag.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Tag) private tagRepository: Repository<Tag>,
    @InjectRepository(Item) private itemRepository: Repository<Item>
  ) {}

  getTags(): Promise<Tag[]> {
    return this.tagRepository.find();
  }

  async createTag(tag: CreateTagDto): Promise<Tag> {
    const id = (await this.tagRepository.insert(tag)).identifiers[0].id;
    return { ...tag, id };
  }

  deleteTag(tagId: number): Promise<DeleteResult> {
    return this.tagRepository.delete(tagId);
  }

  getItems(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async createItem(item: CreateItemDto): Promise<Item> {
    const id = (await this.itemRepository.insert(item)).identifiers[0].id;
    return { ...item, id };
  }

  deleteItem(itemId: number): Promise<DeleteResult> {
    return this.itemRepository.delete(itemId);
  }
}
