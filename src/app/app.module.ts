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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CategoryComponent,
    ProductComponent,
    AddCategoryDialogComponent,
    AddSubCategoryDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents:[CategoryComponent,ProductComponent,AddCategoryDialogComponent,AddSubCategoryDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
