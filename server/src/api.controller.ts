import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';

import { ApiService } from './api.service';
import { CreateItemDto, Item } from './item.entity';
import { CreateTagDto, Tag } from './tag.entity';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('tags')
  getTags(): Promise<Tag[]> {
    return this.apiService.readTags();
  }

  @Post('tag')
  async postTag(@Body() tag: CreateTagDto): Promise<Tag> {
    return this.apiService.createTag(tag);
  }

  @Put('tag/:id')
  async putTag(
    @Body() tag: Tag,
    @Param() { id }: { id: string }
  ): Promise<Tag> {
    tag.id = +id;
    return this.apiService.updateTag(tag);
  }

  @Delete('tag/:id')
  deleteTag(@Param() { id }: { id: string }): void {
    this.apiService.deleteTag(+id);
  }

  @Get('items')
  getItems(): Promise<Item[]> {
    return this.apiService.getItems();
  }

  @Post('item')
  postItem(@Body() item: CreateItemDto): Promise<Item> {
    return this.apiService.createItem(item);
  }

  @Delete('item/:id')
  deleteItem(@Param() { id }: { id: string }): Promise<number | null> {
    return this.apiService.deleteItem(+id);
  }
}
