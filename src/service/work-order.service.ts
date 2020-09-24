import { Injectable } from '@angular/core';
import { WorkOrder } from 'src/models/WorkOrder';
import { FactoryService } from './factory.service';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService extends FactoryService<WorkOrder> {

  route = "workOrder"

  addProducts(products) {
    return this.http.post(`/${this.route}/addProducts`, products, { responseType: 'text' })
  }

  getWordOrderItems(id) {
    return this.http.get(`/${this.route}/` + id, { responseType: 'json' })
  }
}
