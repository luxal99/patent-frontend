import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/models/Product';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-add-items-dialog',
  templateUrl: './add-items-dialog.component.html',
  styleUrls: ['./add-items-dialog.component.css']
})
export class AddItemsDialogComponent implements OnInit {

  amountForm = new FormGroup({
    amount: new FormControl("", Validators.required)
  })

  searchForm = new FormGroup({
    search: new FormControl("", Validators.required)
  })

  listOfProducts: Array<Product> = []
  filteredTopic: Array<Product> = [];
  choosenList: Array<Product> = [];
  workOrderProductList: Array<Product> = []


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts()
  }

  addToChoosenList(product) {
    this.choosenList.push(product);
  }

  addToWorkOrderList(product) {
    var amountValue = this.amountForm.get("amount").value; 

    let i = 0;
    while (i < amountValue) {

      this.workOrderProductList.push(product)
      i++;
    }

  }

  update(){
    console.log(this.workOrderProductList);
    
  }
  getAllProducts() {
    this.productService.getAll().subscribe(resp => {
      this.listOfProducts = resp as Array<Product>
    })
  }

  search() {

    if (this.searchForm.get("search").value === '') {
      this.filteredTopic = [];
    } else {
      this.listOfProducts.forEach(topic => {
        if (topic.title.includes(this.searchForm.get("search").value)) {
          var index = this.filteredTopic.findIndex(x => x.title === topic.title)
          if (index < 0)
            this.filteredTopic.push(topic)
        }
      })
    }
  }

}
