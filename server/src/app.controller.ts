import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { Item } from './item.schema';
import { Tag } from './tag.schema';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tags')
  getTags(): Promise<Tag[]> {
    return this.appService.getTags();
  }

  @Post('tag')
  postTag(@Body() tag: Tag): Promise<Tag> {
    return this.appService.postTag(tag);
  }

  @Delete('tag/:id')
  deleteTag(@Param() { id }: { id: string }): Promise<Tag | null> {
    return this.appService.deleteTag(id);
  }

  @Get('items')
  getItems(): Promise<Item[]> {
    return this.appService.getItems();
  }

  @Post('item')
  postItem(@Body() item: Item): Promise<Item> {
    return this.appService.postItem(item);
  }

  @Delete('item/:id')
  deleteItem(@Param() { id }: { id: string }): Promise<Item | null> {
    return this.appService.deleteItem(id);
  }
}
