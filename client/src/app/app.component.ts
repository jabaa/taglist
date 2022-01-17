import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';
import { Tag } from './tag';
import { TagService } from './tag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newTag = '';
  tags$ = this.tagService.entities$;
  newItem = '';
  items$ = this.itemService.entities$;

  constructor(
    private itemService: ItemService,
    private tagService: TagService
  ) {}

  ngOnInit(): void {
    this.itemService.getAll();
    this.tagService.getAll();
  }

  onEnterTag(): void {
    if (!this.newTag) {
      return;
    }
    this.tagService.add({ name: this.newTag });
  }

  onEnterItem(): void {
    if (!this.newItem) {
      return;
    }
    this.itemService.add({ name: this.newTag, tags: [] });
  }

  onDeleteTag(tag: Tag): void {
    this.tagService.delete(tag.id);
  }

  onDeleteItem(item: Item): void {
    this.itemService.delete(item.id);
  }
}
