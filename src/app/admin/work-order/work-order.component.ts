import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddWorkOrderDialogComponent } from './add-work-order-dialog/add-work-order-dialog.component';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css']
})
export class WorkOrderComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  async ngOnInit():Promise<void> {
  }

  openAddWorkOrderDialog(){
    const dialogRef = this.dialog.open(AddWorkOrderDialogComponent, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
