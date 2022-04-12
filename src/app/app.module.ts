import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrLoginComponent } from './hr-login/hr-login.component';
import { InternloginComponent } from './internlogin/internlogin.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ViewallinternsComponent } from './viewallinterns/viewallinterns.component';
import {  HttpClientModule } from '@angular/common/http';
import { UpdateinternComponent } from './updateintern/updateintern.component';
import { DeleteinternComponent } from './deleteintern/deleteintern.component';
import { SearchinternComponent } from './searchintern/searchintern.component';

@NgModule({
  declarations: [
    AppComponent,
    HrLoginComponent,
    InternloginComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    DashboardComponent,
   
    ViewallinternsComponent,
    UpdateinternComponent,
    DeleteinternComponent,
    SearchinternComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
