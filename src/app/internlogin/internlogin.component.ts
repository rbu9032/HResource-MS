import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HrservicesService } from '../hrservices.service';
import { Intern } from './intern';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internlogin',
  templateUrl: './internlogin.component.html',
  styleUrls: ['./internlogin.component.css']
})
export class InternloginComponent {
  myform:NgForm;

fname:string="";
emailid:string="";
mobile:number;
city:string="";
domain:string="";
salary:number;
intern:Intern;
msg:string="";
flag:boolean=false;
constructor(private hrservice:HrservicesService, private router: Router){}

store(data:any){
  console.log(data.value);
  this.fname=data.value.fname;
  this.emailid=data.value.emailid;
  this.mobile=data.value.mobile;
  this.city=data.value.city;
  this.domain=data.value.domain;
  this.salary=data.value.salary;
  this.intern=new Intern(this.fname, this.emailid,this.mobile,this.city,this.domain,this.salary);
  this.hrservice.storeData(this.intern).subscribe(res=>{
   data.form.reset();
     this.msg=res;
     this.flag=true;
     
   
  })
  
}
}

