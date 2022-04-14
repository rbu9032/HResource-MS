import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HrservicesService } from '../hrservices.service';


@Component({
  selector: 'app-hr-login',
  templateUrl: './hr-login.component.html',
  styleUrls: ['./hr-login.component.css']
})
export class HrLoginComponent implements OnInit  {
  myform:FormGroup;
  
  
  constructor(private route:Router, private service:HrservicesService){}
  ngOnInit(){
    this.myform=new FormGroup({
      email:new FormControl("",[Validators.required]),
      pwd:new FormControl("",[Validators.required])
     });
  }
  
  loginApp(){
    if(this.myform.valid){
      this.service.loginA(this.myform.value.email,this.myform.value.pwd).subscribe((res)=>{
        alert('success')
        this.route.navigate(['login']);
      },(err:Error)=>{
        alert(err.message)
      })
    }
  }
}

  


