import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HrservicesService } from '../hrservices.service';
import { Intern } from './intern';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-internlogin',
  templateUrl: './internlogin.component.html',
  styleUrls: ['./internlogin.component.css']
})
export class InternloginComponent {
  myform:NgForm;
lid:number;
fname:string="";

emailid:string="";
mobile:number;
city:string="";
domain:string="";
salary:number;
intern:Intern;
msg:string="";
flag:boolean=false;
constructor(private hrservice:HrservicesService){}

store(data){
  console.log(data.value);
  this.lid=data.value.lid;
  this.fname=data.value.fname;
 
  this.emailid=data.value.emailid;
  this.mobile=data.value.mobile;
  this.city=data.value.city;
  this.domain=data.value.domain;
  this.salary=data.value.salary;
  this.intern=new Intern(this.lid,this.fname, this.emailid,this.mobile,this.city,this.domain,this.salary);
  this.hrservice.storeData(this.intern).subscribe(data=>{
    console.log(data)
     this.msg=data;
     this.flag=true;
    
  })
  
}
}

