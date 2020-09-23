import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Manufacturer } from 'src/models/Manufacturer';
import { ManufacturerService } from 'src/service/manufacturer.service';
import { AddManufacturerDialogComponent } from './add-manufacturer-dialog/add-manufacturer-dialog.component';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  listOfManufacturers: Array<Manufacturer> = []

  constructor(private dialog: MatDialog, private manufacturerService: ManufacturerService) { }

  ngOnInit() {
    this.getAllManufacturers();
  }

  getAllManufacturers() {
    this.manufacturerService.getAll().subscribe(resp => {
      this.listOfManufacturers = resp as Array<Manufacturer>
    })
  }

  openAddCategoryDialog(): void {
    const dialogRef = this.dialog.open(AddManufacturerDialogComponent, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllManufacturers();
    });
}

}
