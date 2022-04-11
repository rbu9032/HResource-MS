import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { HrLoginComponent } from './hr-login/hr-login.component';
import { InternloginComponent } from './internlogin/internlogin.component';
import { InternpopupComponent } from './internpopup/internpopup.component';
import { LoginComponent } from './login/login.component';
import { ViewallinternsComponent } from './viewallinterns/viewallinterns.component';

const routes: Routes = [
{path: "home", component:HomeComponent},
{path: '', redirectTo:'/home', pathMatch:'full'},
{path: "about", component:AboutComponent},
{path: "popup", component:InternpopupComponent},
{path: "hrlogin", component:HrLoginComponent},
{path: "login", component:LoginComponent},
{path: "getallemplo", component:ViewallinternsComponent},
{path: "dashboard", component:DashboardComponent},
{path:"intern",component:InternloginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
