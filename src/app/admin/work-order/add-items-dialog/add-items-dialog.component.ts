import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'src/models/Product';
import { ProductService } from 'src/service/product.service';
import { WorkOrderService } from 'src/service/work-order.service';

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


  constructor(private _snackBar: MatSnackBar,@Inject(MAT_DIALOG_DATA) public data: any,private productService: ProductService, private workOrderService: WorkOrderService) { }

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

    this.openSnackBar(`Dodato je ${amountValue} komada`,"DONE")
  }

  pushWorkOrderList(){
    const obj = {id:this.data.id,listOfProducts:this.workOrderProductList}
    this.workOrderService.addProducts(obj).subscribe(resp=>{
    })
  }

  getAllProducts() {
    this.productService.getAll().subscribe(resp => {
      this.listOfProducts = resp as Array<Product>
    })
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  search() {
    if (this.searchForm.get("search").value === '') {
      this.filteredTopic = [];
    } else {
      this.listOfProducts.forEach(topic => {
        
        if (topic.title.toLowerCase().includes(this.searchForm.get("search").value)) {
          var index = this.filteredTopic.findIndex(x => x.title === topic.title)
          if (index < 0)
            this.filteredTopic.push(topic)
        }
      })
    }
  }
}
