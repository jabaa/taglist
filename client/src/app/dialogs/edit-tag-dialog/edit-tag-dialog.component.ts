import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag } from 'src/app/tag';

export interface EditTagDialogResult {
  action: 'delete' | 'save';
  tag: Tag;
}

@Component({
  selector: 'app-edit-tag-dialog',
  templateUrl: './edit-tag-dialog.component.html',
  styleUrls: ['./edit-tag-dialog.component.scss']
})
export class EditTagDialogComponent {
  tag: Tag;
  constructor(@Inject(MAT_DIALOG_DATA) tag: Tag) {
    this.tag = { ...tag };
  }
}
