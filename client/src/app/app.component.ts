import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { combineLatest, map, startWith, Subject } from 'rxjs';
import { EditTagDialogComponent } from './dialogs/edit-tag-dialog/edit-tag-dialog.component';
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
  private tagFilter$: Subject<string> = new Subject();
  tagFilter = '';
  newTag = '';
  tags$ = combineLatest([
    this.tagService.entities$,
    this.tagFilter$.pipe(startWith(this.tagFilter))
  ]).pipe(
    map(([tags, filter]) => tags.filter((tag) => tag.name.includes(filter)))
  );
  activeTagsById: Record<number, Tag | false> = {};
  private itemFilter$: Subject<Tag[]> = new Subject();
  newItem = '';
  items$ = combineLatest([
    this.itemService.entities$,
    this.itemFilter$.pipe(startWith([]))
  ]).pipe(
    map(([items, tags]) =>
      items.filter((item) =>
        tags.every((tag) => item.tags?.map((tag) => tag.id).includes(tag.id))
      )
    )
  );

  get activeTags(): Tag[] {
    return (
      Object.entries(this.activeTagsById).filter(
        ([, tag]: [string, Tag | false]) => tag !== false
      ) as [string, Tag][]
    ).map(([, tag]: [string, Tag]) => tag);
  }

  constructor(
    private itemService: ItemService,
    private tagService: TagService,
    private dialogService: MatDialog
  ) {}

  ngOnInit(): void {
    this.itemService.getAll();
    this.tagService.getAll();
  }

  onFilterTags(): void {
    this.tagFilter$.next(this.tagFilter);
  }

  onClickTag(tag: Tag): void {
    this.activeTagsById[tag.id] = this.activeTagsById[tag.id] ? false : tag;
    this.itemFilter$.next(this.activeTags);
  }

  onEnterTag(): void {
    if (!this.newTag) {
      return;
    }
    this.tagService
      .add({ name: this.newTag })
      .subscribe(() => (this.newTag = ''));
  }

  onEnterItem(): void {
    if (!this.newItem) {
      return;
    }
    this.itemService
      .add({
        name: this.newItem,
        tags: this.activeTags
      })
      .subscribe(() => (this.newItem = ''));
  }

  onEditTag(tag: Tag): void {
    this.dialogService
      .open(EditTagDialogComponent, {
        data: tag
      })
      .afterClosed()
      .subscribe((result) => {
        switch (result.action) {
          case 'delete':
            this.tagService.delete(result.tag.id);
            this.activeTagsById[result.tag.id] = false;
            break;
          case 'save':
            this.tagService.update(result.tag);
            if (this.activeTagsById[result.tag.id]) {
              this.activeTagsById[result.tag.id] = result.tag;
            }
            break;
        }
        this.itemFilter$.next(this.activeTags);
      });
  }

  deleteTag(tag: Tag): void {
    this.tagService.delete(tag.id);
  }

  onDeleteItem(item: Item): void {
    this.itemService.delete(item.id);
  }
}
