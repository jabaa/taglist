import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTags(): { tags: string[] } {
    return { tags: ['linux'] };
  }
}
