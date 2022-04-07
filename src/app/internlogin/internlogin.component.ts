import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-internlogin',
  templateUrl: './internlogin.component.html',
  styleUrls: ['./internlogin.component.css']
})
export class InternloginComponent {

  registerForm:FormGroup;
  successMessage:string;
  failMessage:string;
  constructor(){
    this.registerForm=new FormGroup({
      fname:new FormControl("",[Validators.required]),
      lname:new FormControl("",[Validators.required]),
      myemail:new FormControl("",[Validators.required]),
      mobile:new FormControl("",[Validators.required,Validators.pattern('[0-9]+')]),
       pwd:new FormControl("",[Validators.required,Validators.minLength(8)])

    });
  }
  get fname(){
    return this.registerForm.get('fname');
  }
  get lname(){
    return this.registerForm.get('lname');
  }
  get myemail(){
    return this.registerForm.get('myemail');
  }
  get mobile(){
    return this.registerForm.get('mobile');
  }

  get pwd(){
   return this.registerForm.get('pwd');
 }

 submitData(){
   alert('successfully login....');
   console.log(this.registerForm.value.fname);
   console.log(this.registerForm.value.lname);
   console.log(this.registerForm.value.myemail); 
   console.log(this.registerForm.value.mobile);
   console.log(this.registerForm.value.pwd);
   
   this.registerForm.reset();
 }
}

