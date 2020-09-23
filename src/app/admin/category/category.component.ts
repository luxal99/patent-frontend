import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSlideToggle } from '@angular/material';
import { Category } from 'src/models/Category';
import { SubCategory } from 'src/models/SubCategory';
import { CategoryService } from 'src/service/category.service';
import { SubCategoryService } from 'src/service/sub-category.service';
import { AddCategoryDialogComponent } from './add-category-dialog/add-category-dialog.component';
import { AddSubCategoryDialogComponent } from './add-sub-category-dialog/add-sub-category-dialog.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  listOfCategories: Array<Category> = [];

  listOfSubCategories: Array<SubCategory> = [];


  @ViewChild('toggle', { static: false }) toggle: MatSlideToggle;
  
  @ViewChild('toggle', { static: false }) toggleSubCat: MatSlideToggle;

  constructor(private dialog: MatDialog,private subCategoryService:SubCategoryService, private categoryService: CategoryService) { }

  async ngOnInit(): Promise<void> {
    this.getAllCategories();
    this.getAllSubCategories ()
  }

  hideCategory() {
    if (!this.toggle.checked) {
      document.getElementById("category").style.display = 'none'
    } else {
      document.getElementById("category").style.display = 'block'
    }

  }

  hideSubCategory() {
    if (!this.toggle.checked) {
      document.getElementById("sub-category").style.display = 'none'
    } else {
      document.getElementById("sub-category").style.display = 'block'
    }

  }
  getAllCategories() {
    this.categoryService.getAll().subscribe(resp => {
      this.listOfCategories = resp as Array<Category>
    })
  }

  getAllSubCategories (){
    this.subCategoryService.getAll().subscribe(resp => {
      this.listOfSubCategories = resp as Array<SubCategory>
    })
  }

  openAddCategoryDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryDialogComponent, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllCategories();
    });
  }

  openAddSubCategoryDialog(): void {
    const dialogRef = this.dialog.open(AddSubCategoryDialogComponent, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {

      this.getAllCategories();
      this.getAllSubCategories ()
    });
  }
}