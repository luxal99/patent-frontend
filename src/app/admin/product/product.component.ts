import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Product } from 'src/models/Product';
import { ProductService } from 'src/service/product.service';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { ProductMoreDialogComponent } from './product-more-dialog/product-more-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  listOfProducts: Array<Product> = [];

  constructor(private dialog: MatDialog, private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAll().subscribe(resp => {
      this.listOfProducts = resp as Array<Product>
    })
  }

  openAddProductDialog(): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '20%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts();
    });
  }

  openProductMoreDialog(produdct): void {
    const dialogRef = this.dialog.open(ProductMoreDialogComponent, {
      minWidth: '10%',
      position: { right: '0' },
      height: '100vh',
      data: produdct
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts();
    });
  }


}
