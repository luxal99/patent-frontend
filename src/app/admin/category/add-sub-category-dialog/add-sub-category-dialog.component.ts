import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/models/Category';
import { SubCategory } from 'src/models/SubCategory';
import { CategoryService } from 'src/service/category.service';
import { SubCategoryService } from 'src/service/sub-category.service';

@Component({
  selector: 'app-add-sub-category-dialog',
  templateUrl: './add-sub-category-dialog.component.html',
  styleUrls: ['./add-sub-category-dialog.component.css']
})
export class AddSubCategoryDialogComponent implements OnInit {


  listOfCategories: Array<Category> = [];


  addSubCategoryForm = new FormGroup({
    title: new FormControl("",Validators.required),
    idCategory: new FormControl("",Validators.required)
  })
  constructor(private categoryService: CategoryService,private subCategoryService:SubCategoryService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe(resp => {
      this.listOfCategories = resp as Array<Category>
    })
  }

  add(){

    this.subCategoryService.save(new SubCategory(
      this.addSubCategoryForm.get("titile").value,this.addSubCategoryForm.get("idCategory").value
    )).subscribe(resp=>{
      console.log(resp);
      
    })
  }

}
