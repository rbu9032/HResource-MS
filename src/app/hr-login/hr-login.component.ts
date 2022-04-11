import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-hr-login',
  templateUrl: './hr-login.component.html',
  styleUrls: ['./hr-login.component.css']
})
export class HrLoginComponent  {
  loginform:FormGroup;
  Message:string;

  
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
   
   console.log(this.loginform.value.pwd);
   console.log(this.loginform.value.myemail);
   if (this.loginform.value.myemail=='abc@gmail.com' && this.loginform.value.pwd=='123456789')
  {
    console.log('inside the if');
    //this.Message="SUCCESSFULLY  LOGIN"
    alert('successfully login...')
  }else{
    //this.Message="INVALID USERNAME OR PASSWORD";
    alert('Invalid username or Id...')
  }

  this.loginform.reset();
 }
}

  


