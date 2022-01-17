import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Tag } from './tag.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}

export interface CreateItemDto {
  name: string;
  tags: Tag[];
}
