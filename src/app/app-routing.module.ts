import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteinternComponent } from './deleteintern/deleteintern.component';
import { HomeComponent } from './home/home.component';

import { HrLoginComponent } from './hr-login/hr-login.component';
import { InternloginComponent } from './internlogin/internlogin.component';

import { LoginComponent } from './login/login.component';
import { SearchinternComponent } from './searchintern/searchintern.component';
import { UpdateinternComponent } from './updateintern/updateintern.component';
import { ViewallinternsComponent } from './viewallinterns/viewallinterns.component';

const routes: Routes = [
{path: "home", component:HomeComponent},
{path: '', redirectTo:'/home', pathMatch:'full'},
{path: "hrlogin", component:HrLoginComponent},
{path: "login", component:LoginComponent},
{path: "learner", component:ViewallinternsComponent},
{path: "dashboard", component:DashboardComponent},
{path:"intern",component:InternloginComponent},
{path:"updateintern", component:UpdateinternComponent},
{path:"deleteintern", component:DeleteinternComponent},
{path: "search", component:SearchinternComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
