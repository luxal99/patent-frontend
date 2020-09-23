import { Injectable } from '@angular/core';
import { WorkOrder } from 'src/models/WorkOrder';
import { FactoryService } from './factory.service';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService extends FactoryService<WorkOrder> {

  route= "workOrder"
}
