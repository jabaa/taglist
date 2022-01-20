import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateItemDto, Item } from './item.entity';
import { CreateTagDto, Tag } from './tag.entity';

@Injectable()
export class ApiService {
  constructor(
    @InjectRepository(Tag) private tagRepository: Repository<Tag>,
    @InjectRepository(Item) private itemRepository: Repository<Item>
  ) {}

  async createTag(tag: CreateTagDto): Promise<Tag> {
    return this.tagRepository.save(tag);
  }

  readTags(): Promise<Tag[]> {
    return this.tagRepository.find();
  }

  async updateTag(tag: Tag): Promise<Tag> {
    return this.tagRepository.save(tag);
  }

  deleteTag(tagId: number): Promise<DeleteResult> {
    return this.tagRepository.delete(tagId);
  }

  getItems(): Promise<Item[]> {
    return this.itemRepository.find({ relations: ['tags'] });
  }

  createItem(item: CreateItemDto): Promise<Item> {
    return this.itemRepository.save(item);
  }

  async deleteItem(itemId: number): Promise<number | null> {
    const result = await this.itemRepository.delete(itemId);
    return result.affected ? itemId : null;
  }
}
