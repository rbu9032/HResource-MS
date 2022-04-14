import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrservicesService } from '../hrservices.service';
import { Intern } from './intrn';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public interns:any = [];
  emailid:string;
  name:string;
  intrn:Intern[]=[]
  constructor(private hrservice: HrservicesService,private router: Router, private route:Router) { }
 
  

  delete(mobile:number){ 
    if(confirm('Are you sure to delete this record?')){
    this.hrservice.deleteData(mobile).subscribe(data=>{
     this.interns=data
    });
  }
  }
  /*search(emailid:any){
   this.hrservice.searchData(emailid).subscribe(data=>{
     this.interns=data
    // console.log(emailid.value.emaildi)
       })
    }*/
    /*search(emailid){
      this.hrservice.searchData(this.emailid).subscribe(data=>{
      // this.interns =data
      console.log(emailid.value.emaildi) 
      })
    }*/
   search(){
      let resp =this.hrservice.searchData(this.emailid);
      //resp.subscribe((data)=>this.interns=data);
      resp.subscribe(data=>{console.log(data)
      this.interns=data;
      },error=>console.log(error)
      )
    }
    /*updateIntern(mobile:number){
      this.router.navigate(['update', mobile]);
    }*/
  ngOnInit() {
   if(this.hrservice.isLoggedIn()){
     this.route.navigate(['hrlogin'])
   }
   this.name=this.hrservice.getName();
    { this.hrservice.getIntern().subscribe(data=>{
      console.log(data);
      this.interns=data;
      }, error=>{
        console.log(error.message)
    });}
    
    


  }
  logout(){
    this.hrservice.logout();
  }

}
