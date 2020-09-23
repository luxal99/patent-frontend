import { Injectable } from '@angular/core';
import { Product } from 'src/models/Product';
import { FactoryService } from './factory.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends FactoryService<Product> {
  route = "product"
}
