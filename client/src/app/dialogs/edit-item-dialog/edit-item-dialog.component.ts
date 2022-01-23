import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/item';

export interface EditItemDialogResult {
  action: 'delete' | 'save';
  item: Item;
}

@Component({
  selector: 'app-edit-item-dialog',
  templateUrl: './edit-item-dialog.component.html',
  styleUrls: ['./edit-item-dialog.component.scss']
})
export class EditItemDialogComponent {
  item: Item;
  constructor(@Inject(MAT_DIALOG_DATA) item: Item) {
    this.item = { ...item };
  }
}
