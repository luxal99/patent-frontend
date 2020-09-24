import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Manufacturer } from 'src/models/Manufacturer';
import { Product } from 'src/models/Product';
import { SubCategory } from 'src/models/SubCategory';
import { ManufacturerService } from 'src/service/manufacturer.service';
import { ProductService } from 'src/service/product.service';
import { SubCategoryService } from 'src/service/sub-category.service';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.css']
})
export class EditProductDialogComponent implements OnInit {


  listOfSubCategories: Array<SubCategory> = [];

  listOfManufacturers: Array<Manufacturer> = []



  editProductForm = new FormGroup({
    title: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    idSubCategory: new FormControl("", Validators.required),
    idManufacturer: new FormControl("", Validators.required),
    code: new FormControl("", Validators.required)
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private subCategoryService: SubCategoryService, private productService: ProductService, private manufacturerService: ManufacturerService) { }

  ngOnInit() {

    this.setValue();

    this.getAllManufacturers();
    this.getAllSubCategories();
  }

  setValue() {
    this.editProductForm.get("title").setValue(this.data.title);
    this.editProductForm.get("amount").setValue(this.data.amount);
    this.editProductForm.get("code").setValue(this.data.code);
    this.editProductForm.get("idManufacturer").setValue(this.data.idManufacturer);
    this.editProductForm.get("price").setValue(this.data.price);
    this.editProductForm.get("title").setValue(this.data.title);

  }

  getAllSubCategories() {
    this.subCategoryService.getAll().subscribe(resp => {
      this.listOfSubCategories = resp as Array<SubCategory>
    })
  }

  getAllManufacturers() {
    this.manufacturerService.getAll().subscribe(resp => {
      this.listOfManufacturers = resp as Array<Manufacturer>
    })
  }

  update() {

    var product = new Product();

    product.id = this.data.id
    product.title = this.editProductForm.get("title").value;
    product.price = this.editProductForm.get("price").value;
    product.amount = this.editProductForm.get("amount").value;
    product.idSubCategory = this.editProductForm.get("idSubCategory").value;
    product.idManufacturer = this.editProductForm.get("idManufacturer").value;
    product.code = this.editProductForm.get("code").value;

    this.productService.update(product).subscribe(resp => {
    })
  }
}
