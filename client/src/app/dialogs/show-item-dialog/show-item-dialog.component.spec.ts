import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowItemDialogComponent } from './show-item-dialog.component';

describe('ShowItemDialogComponent', () => {
  let component: ShowItemDialogComponent;
  let fixture: ComponentFixture<ShowItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowItemDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
