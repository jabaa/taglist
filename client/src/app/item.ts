import { Tag } from './tag';

export interface Item {
  id?: any;
  name: string;
  tags: Tag[];
}
