import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tags')
  getTags(): { tags: string[] } {
    return this.appService.getTags();
  }
}
