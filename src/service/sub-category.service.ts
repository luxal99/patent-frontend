import { Injectable } from '@angular/core';
import { FactoryService } from './factory.service';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService extends FactoryService<SubCategory> {
  route = "subCategory"
}
