import { Injectable } from '@angular/core';
import { SubCategory } from 'src/models/SubCategory';
import { FactoryService } from './factory.service';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService extends FactoryService<SubCategory> {
  route = "subCategory"
}
