import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Manufacturer } from 'src/models/Manufacturer';
import { ManufacturerService } from 'src/service/manufacturer.service';

@Component({
  selector: 'app-add-manufacturer-dialog',
  templateUrl: './add-manufacturer-dialog.component.html',
  styleUrls: ['./add-manufacturer-dialog.component.css']
})
export class AddManufacturerDialogComponent implements OnInit {

  addManufacturerForm = new FormGroup({
    title : new FormControl("",Validators.required)
  })
  constructor(private manufacturerService:ManufacturerService) { }

  ngOnInit() {

  }

  add(){
    this.manufacturerService.save(new Manufacturer(this.addManufacturerForm.get("title").value)).subscribe(resp=>{
      console.log(resp);
      
    })
  }

}
