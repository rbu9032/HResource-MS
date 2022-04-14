import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HrservicesService } from '../hrservices.service';
import { Intern } from './interns';


@Component({
  selector: 'app-updateintern',
  templateUrl: './updateintern.component.html',
  styleUrls: ['./updateintern.component.css']
})
export class UpdateinternComponent   {
  mobile:number;
  salary:number;
  interns:Intern;
  msg:string="";
  flag:boolean=false;
  constructor(private hrservice:HrservicesService, private router:Router){}

 /* ngOnInit() {
    this.myform=new FormGroup({
      //domain:new FormControl("",[Validators.required]),
      sly:new FormControl("",[Validators.required])
     });
  }/*/

  update(data){
    console.log(data.value);
    this.mobile=data.value.mobile;
    this.salary=data.value.salary;
    this.interns=new Intern(this.mobile,this.salary);
    this.hrservice.updateData(this.interns).subscribe(data=>{
      console.log(data)
      this.router.navigate(['login']);
       this.msg=data;
       this.flag=true;
      
    })
    /*onSubmit(data){
     this.hrservice.updateData(this.mobile, this.interns)
      .subscribe(data=>console.log(data), error=>console.log(error));
      this.interns= new Intern(this.domain, this.salary);
      this.router.navigate(['login']);
      console.log(data.value);
      this.mobile=data.value.mobile;
      this.salary=data.value.salary;
      this.interns=new Intern(this.mobile,this.salary);
      this.hrservice.updateData(this.interns).subscribe(data=>{
        console.log(data)
        this.router.navigate(['login']);
         
        
    })*/
  }
}
  
  





