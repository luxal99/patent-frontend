import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { WorkOrder } from 'src/models/WorkOrder';
import { WorkOrderService } from 'src/service/work-order.service';

@Component({
  selector: 'app-work-order-overview-dialog',
  templateUrl: './work-order-overview-dialog.component.html',
  styleUrls: ['./work-order-overview-dialog.component.css']
})
export class WorkOrderOverviewDialogComponent implements OnInit {

  workOrder:WorkOrder = new WorkOrder();
  listOfWorkOrderProducts:Array<any>=[]

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private workOrderService:WorkOrderService) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.workOrderService.getWordOrderItems(this.data.id).subscribe(resp=>{
      this.listOfWorkOrderProducts = resp['listOfProduct'] as Array<any>
      localStorage.setItem("date",resp['date'])
      
    })

    this.workOrder.date = localStorage.getItem("date")
    
  }

  displayedColumns: string[] = ['title', 'price', 'amounts', 'total'];


}
