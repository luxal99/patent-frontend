import { ViewChild } from '@angular/core';
import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  @ViewChild('target', { read: ViewContainerRef, static: false }) entry: ViewContainerRef;

  constructor(private cvRef: ViewContainerRef, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  async loadCategory (){
    this.entry.clear();
    const { CategoryComponent } = await import('./category/category.component');
    const factory = this.resolver.resolveComponentFactory(CategoryComponent)
    this.entry.createComponent(factory);
  }

  async loadManufacturer (){
    this.entry.clear();
    const { ManufacturerComponent } = await import('./manufacturer/manufacturer.component');
    const factory = this.resolver.resolveComponentFactory(ManufacturerComponent)
    this.entry.createComponent(factory);
  }
  async loadProduct (){
    this.entry.clear();
    const { ProductComponent } = await import('./product/product.component');
    const factory = this.resolver.resolveComponentFactory(ProductComponent)
    this.entry.createComponent(factory);
  }

}
