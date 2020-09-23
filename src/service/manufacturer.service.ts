import { Injectable } from '@angular/core';
import { Manufacturer } from 'src/models/Manufacturer';
import { FactoryService } from './factory.service';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService extends FactoryService<Manufacturer> {
  route = "manufacturer"
}
