import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddCategoryDialogComponent } from './add-category-dialog/add-category-dialog.component';
import { AddSubCategoryDialogComponent } from './add-sub-category-dialog/add-sub-category-dialog.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
  }

  openAddCategoryDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryDialogComponent, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      ;
    });
  }

  openAddSubCategoryDialog(): void {
    const dialogRef = this.dialog.open(AddSubCategoryDialogComponent, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      ;
    });
  }
}