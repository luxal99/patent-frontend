import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkOrder } from 'src/models/WorkOrder';
import { WorkOrderService } from 'src/service/work-order.service';

@Component({
  selector: 'app-add-work-order-dialog',
  templateUrl: './add-work-order-dialog.component.html',
  styleUrls: ['./add-work-order-dialog.component.css']
})
export class AddWorkOrderDialogComponent implements OnInit {


  workOrderForm = new FormGroup({
    date: new FormControl("", Validators.required)
  })

  constructor(private workOrderService: WorkOrderService) { }

  ngOnInit() {
  }

  add() {


    let workOrder = new WorkOrder(String(this.workOrderForm.get("date").value));

    this.workOrderService.save(workOrder).subscribe(resp => {
    })
  }

}
