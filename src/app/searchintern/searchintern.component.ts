import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HrservicesService } from '../hrservices.service';



@Component({
  selector: 'app-searchintern',
  templateUrl: './searchintern.component.html',
  styleUrls: ['./searchintern.component.css']
})
export class SearchinternComponent {
 myform:NgForm;
  mobile:number;
  msg:string="";
  flag:boolean=false;
  constructor(private hrservice:HrservicesService) { }
   search(data){
    console.log(data.value);
    this.mobile=data.value.mobile;
    this.hrservice.searchData(this.mobile).subscribe(data=>{
      this.flag=true;
      this.myform.reset();
     })
   }
  

}
