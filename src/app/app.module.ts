import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './admin/category/category.component';
import { ProductComponent } from './admin/product/product.component';
import { AddCategoryDialogComponent } from './admin/category/add-category-dialog/add-category-dialog.component';
import { AddSubCategoryDialogComponent } from './admin/category/add-sub-category-dialog/add-sub-category-dialog.component';
import { ManufacturerComponent } from './admin/manufacturer/manufacturer.component';
import { AddManufacturerDialogComponent } from './admin/manufacturer/add-manufacturer-dialog/add-manufacturer-dialog.component';
import { AddProductDialogComponent } from './admin/product/add-product-dialog/add-product-dialog.component';
import { MatIconModule } from '@angular/material';
import { ProductMoreDialogComponent } from './admin/product/product-more-dialog/product-more-dialog.component';
import { EditProductDialogComponent } from './admin/product/edit-product-dialog/edit-product-dialog.component';
import { WorkOrderComponent } from './admin/work-order/work-order.component';
import { AddWorkOrderDialogComponent } from './admin/work-order/add-work-order-dialog/add-work-order-dialog.component';
import { AddItemsDialogComponent } from './admin/work-order/add-items-dialog/add-items-dialog.component';
import { WorkOrderOverviewDialogComponent } from './admin/work-order/work-order-overview-dialog/work-order-overview-dialog.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CategoryComponent,
    ProductComponent,
    AddCategoryDialogComponent,
    AddSubCategoryDialogComponent,
    ManufacturerComponent,
    AddManufacturerDialogComponent,
    AddProductDialogComponent,
    ProductMoreDialogComponent,
    EditProductDialogComponent,
    WorkOrderComponent,
    AddWorkOrderDialogComponent,
    AddItemsDialogComponent,
    WorkOrderOverviewDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule,
    {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  entryComponents:[AddProductDialogComponent,AddItemsDialogComponent,
    AddWorkOrderDialogComponent,WorkOrderComponent,EditProductDialogComponent,
    ProductMoreDialogComponent,CategoryComponent,AddManufacturerDialogComponent,
    ProductComponent,WorkOrderOverviewDialogComponent,ManufacturerComponent,AddCategoryDialogComponent,AddSubCategoryDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
