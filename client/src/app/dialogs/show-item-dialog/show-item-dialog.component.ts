import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-show-item-dialog',
  templateUrl: './show-item-dialog.component.html',
  styleUrls: ['./show-item-dialog.component.scss']
})
export class ShowItemDialogComponent {
  item: Item;
  constructor(@Inject(MAT_DIALOG_DATA) item: Item) {
    this.item = { ...item };
  }
}
