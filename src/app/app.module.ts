import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrLoginComponent } from './hr-login/hr-login.component';
import { InternloginComponent } from './internlogin/internlogin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  HttpClientModule } from '@angular/common/http';
import { UpdateinternComponent } from './updateintern/updateintern.component';
import { SearchinternComponent } from './searchintern/searchintern.component';


@NgModule({
  declarations: [
    AppComponent,
    HrLoginComponent,
    InternloginComponent,
    HomeComponent,
    LoginComponent,
    UpdateinternComponent,
    SearchinternComponent,
   
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
