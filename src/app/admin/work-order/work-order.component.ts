import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { WorkOrder } from 'src/models/WorkOrder';
import { WorkOrderService } from 'src/service/work-order.service';
import { AddItemsDialogComponent } from './add-items-dialog/add-items-dialog.component';
import { AddWorkOrderDialogComponent } from './add-work-order-dialog/add-work-order-dialog.component';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css']
})
export class WorkOrderComponent implements OnInit {

  listOfWorkOrders: Array<WorkOrder> = [];

  currentWorkOrder:WorkOrder;
  hasCurrentWorkOrder = false;

  constructor(private dialog: MatDialog, private workOrderService: WorkOrderService) { }

  async ngOnInit(): Promise<void> {
    this.getAllWorkOrders();
    this.getCurrentWorkOrder();
  }

  getAllWorkOrders() {
    this.workOrderService.getAll().subscribe(resp => {
      this.listOfWorkOrders = resp as Array<WorkOrder>

      localStorage.setItem("workOrders",JSON.stringify(resp))
    })
  }

  getCurrentWorkOrder(){
    var date = new Date();

    this.listOfWorkOrders = JSON.parse(localStorage.getItem("workOrders"))
    
    
    this.listOfWorkOrders.forEach(workOrder =>{
      let workOrderDate = new Date(workOrder.date)

      let dateSum = date.getDate() + date.getMonth() + date.getFullYear()
      let workOrderDateSum = workOrderDate.getDate() + workOrderDate.getMonth() + workOrderDate.getFullYear()
      
      if(workOrderDateSum === dateSum){
        this.currentWorkOrder = workOrder;
        this.hasCurrentWorkOrder = true
      }

        
    })
  }

  openAddItems(){
    const dialogRef = this.dialog.open(AddItemsDialogComponent, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  
  openAddWorkOrderDialog() {
    const dialogRef = this.dialog.open(AddWorkOrderDialogComponent, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
