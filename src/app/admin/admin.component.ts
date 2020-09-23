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

  async loadWorkOrder (){
    this.entry.clear();
    const { WorkOrderComponent } = await import('./work-order/work-order.component');
    const factory = this.resolver.resolveComponentFactory(WorkOrderComponent)
    this.entry.createComponent(factory);
  }
  async loadProduct (){
    this.entry.clear();
    const { ProductComponent } = await import('./product/product.component');
    const factory = this.resolver.resolveComponentFactory(ProductComponent)
    this.entry.createComponent(factory);
  }

}
