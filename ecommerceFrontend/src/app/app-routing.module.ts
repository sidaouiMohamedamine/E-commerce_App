import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeRootComponent } from './components/home-root/home-root.component';
import { HomeComponent } from './components/home/home.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
    // {path:'adminHome',component:HomeRootComponent,},
    // {path:'statistics',component:StatisticsComponent},
   // {path:'orders',component:OrdersComponent},
  {path:'users',component:ListUserComponent},
  {path:'contact',component:ContactComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {
    path:'admin',
    loadChildren: ()=>
    import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
