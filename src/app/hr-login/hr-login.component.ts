import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hr-login',
  templateUrl: './hr-login.component.html',
  styleUrls: ['./hr-login.component.css']
})
export class HrLoginComponent  {
  loginform:FormGroup;
  successMessage:string;
  failMessage:string;
  constructor(){
    this.loginform=new FormGroup({
      myemail:new FormControl("",[Validators.required]),
      pwd:new FormControl("",[Validators.required,Validators.minLength(8)])
    });
  }

  get myemail(){
    return this.loginform.get('myemail');
  }

  get pwd(){
   return this.loginform.get('pwd');
 }

 login(){
   //alert('successfully login....');
   console.log(this.loginform.value.pwd);
   console.log(this.loginform.value.myemail);
   
  this.successMessage="SUCCESSFULLY  LOGIN"

   this.loginform.reset();
 }
}

  


