import { Component, OnInit } from '@angular/core';
import { HrservicesService } from '../hrservices.service';
import { Intern } from './interrns';

@Component({
  selector: 'app-deleteintern',
  templateUrl: './deleteintern.component.html',
  styleUrls: ['./deleteintern.component.css']
})
export class DeleteinternComponent  {

  mobile:number;
  interrns:Intern;
  msg:string="";
  flag:boolean=false;
  constructor(private hrservice:HrservicesService) { }
delete(data){
  console.log(data.value);
  this.mobile=data.value.mobile;
  
  this.hrservice.deleteData(this.mobile).subscribe(data=>{
   this.msg=data;
   this.flag=true;
  })

}
  

}
