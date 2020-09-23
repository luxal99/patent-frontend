import { Injectable } from '@angular/core';
import { Category } from 'src/models/Category';
import { FactoryService } from './factory.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends FactoryService<Category> {
  route = 'category'
}
