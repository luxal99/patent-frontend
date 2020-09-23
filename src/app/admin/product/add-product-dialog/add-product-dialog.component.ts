import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Manufacturer } from 'src/models/Manufacturer';
import { Product } from 'src/models/Product';
import { SubCategory } from 'src/models/SubCategory';
import { ManufacturerService } from 'src/service/manufacturer.service';
import { ProductService } from 'src/service/product.service';
import { SubCategoryService } from 'src/service/sub-category.service';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent implements OnInit {


  listOfSubCategories: Array<SubCategory> = [];
  
  listOfManufacturers: Array<Manufacturer> = []



  addProductForm = new FormGroup({
    title: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    idSubCategory: new FormControl("", Validators.required),
    idManufacturer: new FormControl("", Validators.required),
    code: new FormControl("", Validators.required)
  })
  constructor(private subCategoryService: SubCategoryService, private productService: ProductService, private manufacturerService: ManufacturerService) { }

  ngOnInit() {

    this.getAllManufacturers();
    this.getAllSubCategories();
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

  add(){
    var product = new Product();

    product.title = this.addProductForm.get("title").value;
    product.price = this.addProductForm.get("price").value;
    product.amount = this.addProductForm.get("amount").value;
    product.idSubCategory = this.addProductForm.get("idSubCategory").value;
    product.idManufacturer = this.addProductForm.get("idManufacturer").value;
    product.code = this.addProductForm.get("code").value;

    console.log(product);
    
    this.productService.save(product).subscribe(resp=>{
      console.log(resp);
      
    })
  }

}
