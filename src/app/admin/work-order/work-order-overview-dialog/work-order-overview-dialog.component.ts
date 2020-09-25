import { Component, Inject, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material';
import { WorkOrder } from 'src/models/WorkOrder';
import { WorkOrderService } from 'src/service/work-order.service';

@Component({
  selector: 'app-work-order-overview-dialog',
  templateUrl: './work-order-overview-dialog.component.html',
  styleUrls: ['./work-order-overview-dialog.component.css']
})
export class WorkOrderOverviewDialogComponent implements OnInit {

  date: string = ''
  listOfWorkOrderProducts: Array<any> = []

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private workOrderService: WorkOrderService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.workOrderService.getWordOrderItems(this.data.id).subscribe(resp => {
      this.listOfWorkOrderProducts = resp['listOfProduct'] as Array<any>
      this.date = resp['date']
    })

  }
  displayedColumns: string[] = ['title', 'price', 'amounts', 'total'];
}
