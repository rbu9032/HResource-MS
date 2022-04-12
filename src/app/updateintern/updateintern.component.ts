import { Component, OnInit } from '@angular/core';
import { HrservicesService } from '../hrservices.service';
import { Intern } from './interns';


@Component({
  selector: 'app-updateintern',
  templateUrl: './updateintern.component.html',
  styleUrls: ['./updateintern.component.css']
})
export class UpdateinternComponent  {
  mobile:number;
  salary:number;
  interns:Intern;
  msg:string="";
  flag:boolean=false;
  constructor(private hrservice:HrservicesService){}

  update(data){
    console.log(data.value);
    this.mobile=data.value.mobile;
    this.salary=data.value.salary;
    this.interns=new Intern(this.mobile,this.salary);
    this.hrservice.updateData(this.interns).subscribe(data=>{
      console.log(data)
       this.msg=data;
       this.flag=true;
      
    })
    
  }

}
