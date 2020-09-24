import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/models/Category';
import { CategoryService } from 'src/service/category.service';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.css']
})
export class AddCategoryDialogComponent implements OnInit {

  addCategoryForm = new FormGroup({
    title: new FormControl("", Validators.required)
  })

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  add() {
    const category = new Category(this.addCategoryForm.get("title").value);
  
    this.categoryService.save(category).subscribe(resp => {
    })
  }

}
