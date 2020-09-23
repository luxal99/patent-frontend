import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-product-more-dialog',
  templateUrl: './product-more-dialog.component.html',
  styleUrls: ['./product-more-dialog.component.css']
})
export class ProductMoreDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
