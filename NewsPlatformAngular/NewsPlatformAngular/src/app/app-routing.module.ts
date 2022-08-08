import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard  } from './admin.guard';


const route : Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'home',component: HomeComponent},
  {path: 'admin',canActivate:[AdminGuard],component: AdminComponent},
  {path:'**',redirectTo:'home'}
]

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
