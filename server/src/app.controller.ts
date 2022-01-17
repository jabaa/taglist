import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { CreateItemDto, Item } from './item.entity';
import { CreateTagDto, Tag } from './tag.entity';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tags')
  getTags(): Promise<Tag[]> {
    return this.appService.getTags();
  }

  @Post('tag')
  async postTag(@Body() tag: CreateTagDto): Promise<Tag> {
    return this.appService.createTag(tag);
  }

  @Delete('tag/:id')
  deleteTag(@Param() { id }: { id: string }): void {
    this.appService.deleteTag(+id);
  }

  @Get('items')
  getItems(): Promise<Item[]> {
    return this.appService.getItems();
  }

  @Post('item')
  postItem(@Body() item: CreateItemDto): Promise<Item> {
    return this.appService.createItem(item);
  }

  @Delete('item/:id')
  deleteItem(@Param() { id }: { id: string }): void {
    this.appService.deleteItem(+id);
  }
}
