import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

import { HrLoginComponent } from './hr-login/hr-login.component';
import { InternloginComponent } from './internlogin/internlogin.component';

import { LoginComponent } from './login/login.component';
import { SearchinternComponent } from './searchintern/searchintern.component';
import { UpdateinternComponent } from './updateintern/updateintern.component';


const routes: Routes = [
{path: "home", component:HomeComponent},
{path: '', redirectTo:'/home', pathMatch:'full'},
{path: "hrlogin", component:HrLoginComponent,canActivate:[AuthGuard]},
{path: "login", component:LoginComponent},
{path:"intern",component:InternloginComponent},
{path:"update", component:UpdateinternComponent},

{path: "search", component:SearchinternComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
