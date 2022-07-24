import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { ProductListComponent } from './components/product-list/product-list.component';




    const routes: Routes = [
      {path:'',component:AdminDashboardComponent,children:[
        {path:'products',component:ProductListComponent},
        {path:'category',component:CategorieComponent},
        {path:'', redirectTo:'admin',pathMatch:'full'},

      ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
