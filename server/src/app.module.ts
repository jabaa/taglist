import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Item, ItemSchema } from './item.schema';
import { Tag, TagSchema } from './tag.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get('MONGODB_URI'),
          user: configService.get('MONGODB_USER'),
          pass: configService.get('MONGODB_PASS')
        };
      }
    }),
    MongooseModule.forFeature([
      { name: Tag.name, schema: TagSchema },
      { name: Item.name, schema: ItemSchema }
    ])
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
