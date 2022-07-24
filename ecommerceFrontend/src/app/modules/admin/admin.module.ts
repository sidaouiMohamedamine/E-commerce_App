import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdatProductComponent } from './components/updat-product/updat-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategorieComponent } from './components/categorie/categorie.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ModifCatComponent } from './components/modif-cat/modif-cat.component';
import { DeleteCatComponent } from './components/delete-cat/delete-cat.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    ProductListComponent,
    AddProductComponent,
    UpdatProductComponent,
    CategorieComponent,
    AddCategoryComponent,
    ModifCatComponent,
    DeleteCatComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    OrderModule
  ]
})
export class AdminModule { }
