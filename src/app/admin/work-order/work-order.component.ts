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

  total = 0;

  listOfWorkOrderProducts: Array<any> = [];

  currentWorkOrder: WorkOrder;
  hasCurrentWorkOrder = false;

  constructor(private dialog: MatDialog, private workOrderService: WorkOrderService) { }

  async ngOnInit(): Promise<void> {
    this.getAllWorkOrders();
    this.getCurrentWorkOrder();
    this.getWorkOrderWithProducts();
  }

  getAllWorkOrders() {
    this.workOrderService.getAll().subscribe(resp => {
      this.listOfWorkOrders = resp as Array<WorkOrder>
      localStorage.setItem("workOrders", JSON.stringify(resp))
    })
  }

  getWorkOrderWithProducts() {
    if (this.currentWorkOrder !== undefined) {
      this.workOrderService.getWordOrderItems(this.currentWorkOrder.id).subscribe(resp => {
        this.listOfWorkOrderProducts = resp['listOfProduct'] as Array<any>

        this.listOfWorkOrderProducts.forEach(product => {
          this.total += product.total
        })

      })
    }


  }

  getCurrentWorkOrder() {
    var date = new Date();

    this.listOfWorkOrders = JSON.parse(localStorage.getItem("workOrders"))

    if (this.listOfWorkOrders !== null) {
      this.listOfWorkOrders.forEach(workOrder => {
        let workOrderDate = new Date(workOrder.date)

        let dateSum = date.getDate() + date.getMonth() + date.getFullYear()
        let workOrderDateSum = workOrderDate.getDate() + workOrderDate.getMonth() + workOrderDate.getFullYear()

        if (workOrderDateSum === dateSum) {
          this.currentWorkOrder = workOrder;
          this.hasCurrentWorkOrder = true
        }


      })
    }

  }

  // Pazar

  openAddItems() {
    const dialogRef = this.dialog.open(AddItemsDialogComponent, {
      width: 'auto',
      data: this.currentWorkOrder
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getWorkOrderWithProducts();
    });
  }

  openAddWorkOrderDialog() {
    const dialogRef = this.dialog.open(AddWorkOrderDialogComponent, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
       this.getAllWorkOrders();
      setTimeout(() => {

      this.getCurrentWorkOrder();
      }, 200);
    });
  }

  displayedColumns: string[] = ['title', 'price', 'amounts', 'total'];
}
