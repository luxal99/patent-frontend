import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-work-order-dialog',
  templateUrl: './add-work-order-dialog.component.html',
  styleUrls: ['./add-work-order-dialog.component.css']
})
export class AddWorkOrderDialogComponent implements OnInit {


  workOrderForm = new FormGroup({
    date: new FormControl("", Validators.required)
  })

  constructor() { }

  ngOnInit() {
  }

  add() {
    
    var date = new Date();
    var formDate = new Date();

    formDate = this.workOrderForm.get("date").value;

    var x = date.getDate()+date.getMonth()+date.getFullYear();
    var y = formDate.getDate()+formDate.getMonth()+formDate.getFullYear();
    

    if(x === y){

      console.log(true);
      
    }else{
        console.log(false);
        
    }
    
      

  }

}
