import { Component, OnInit } from '@angular/core';
import { HrservicesService } from '../hrservices.service';

@Component({
  selector: 'app-viewallinterns',
  templateUrl: './viewallinterns.component.html',
  styleUrls: ['./viewallinterns.component.css']
})
export class ViewallinternsComponent implements OnInit {
  public employees:any = [];
  constructor(private hrservice: HrservicesService) { }

  ngOnInit() {
    this.hrservice.getEmployees().subscribe(data=>{
      console.log(data);
      this.employees=data;
      }, error=>{
        console.log(error.message)
    })
  }
}
