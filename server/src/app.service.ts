import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './item.schema';
import { Tag, TagDocument } from './tag.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Tag.name) private tagModel: Model<TagDocument>,
    @InjectModel(Item.name) private itemModel: Model<ItemDocument>
  ) {}

  getTags(): Promise<Tag[]> {
    return this.tagModel.find().exec();
  }

  postTag(tag: Tag): Promise<Tag> {
    return new this.tagModel(tag).save();
  }

  deleteTag(tagId: string): Promise<Tag | null> {
    return this.tagModel.findByIdAndDelete(tagId).exec();
  }

  getItems(): Promise<Tag[]> {
    return this.itemModel.find().exec();
  }

  postItem(item: Item): Promise<Item> {
    return new this.itemModel(item).save();
  }

  deleteItem(itemId: string): Promise<Item | null> {
    return this.itemModel.findByIdAndDelete(itemId).exec();
  }
}
