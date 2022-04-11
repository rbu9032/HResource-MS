import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-internpopup',
  templateUrl: './internpopup.component.html',
  styleUrls: ['./internpopup.component.css']
})
export class InternpopupComponent  {
nextform:FormGroup
  constructor() {
    this.nextform=new FormGroup({
      uid:new FormControl("",[Validators.required,Validators.minLength(4)])
    });
  
   }
   get uid(){
    return this.nextform.get('uid');
  }
  next(){
    console.log(this.nextform.value.uid);
  }
  
}
