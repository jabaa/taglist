import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Item } from './item';
import { Tag } from './tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tag = '';
  tags$ = this.http.get<Tag[]>('/api/tags');
  item = '';
  items$ = this.http.get<Item[]>('/api/items');

  constructor(private http: HttpClient) {}

  onEnterTag() {
    this.http.post('/api/tag', { name: this.tag }).subscribe();
    this.tag = '';
    this.tags$ = this.http.get<Tag[]>('/api/tags');
  }

  onEnterItem() {
    this.http.post('/api/item', { name: this.item }).subscribe();
    this.item = '';
    this.items$ = this.http.get<Item[]>('/api/items');
  }

  onDeleteTag(tag: Tag) {
    this.http.delete(`/api/tag/${tag._id}`).subscribe();
    this.tags$ = this.http.get<Tag[]>('/api/tags');
  }

  onDeleteItem(item: Item) {
    this.http.delete(`/api/item/${item._id}`).subscribe();
    this.items$ = this.http.get<Item[]>('/api/items');
  }
}
