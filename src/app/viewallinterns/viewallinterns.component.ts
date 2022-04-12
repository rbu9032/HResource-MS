import { Component, OnInit } from '@angular/core';
import { HrservicesService } from '../hrservices.service';

@Component({
  selector: 'app-viewallinterns',
  templateUrl: './viewallinterns.component.html',
  styleUrls: ['./viewallinterns.component.css']
})
export class ViewallinternsComponent  {
  public interns:any = [];
  constructor(private hrservice: HrservicesService) { }

  ngOnInit() {
    this.hrservice.getIntern().subscribe(data=>{
      console.log(data);
      this.interns=data;
      }, error=>{
        console.log(error.message)
    })
  }
}
