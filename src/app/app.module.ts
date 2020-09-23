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
    EditProductDialogComponent
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
  providers: [],
  entryComponents:[AddProductDialogComponent,EditProductDialogComponent,ProductMoreDialogComponent,CategoryComponent,AddManufacturerDialogComponent,ProductComponent,ManufacturerComponent,AddCategoryDialogComponent,AddSubCategoryDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
