import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { Intern } from './updateintern/interns';

@Injectable({
  providedIn: 'root'
})
export class HrservicesService {
  url:string="http://localhost:9002/api/";
  name:string;
  constructor(private http:HttpClient, private route:Router) { }
  
   setToken(token:string):void{
     localStorage.setItem('token',token);
   }
    getToken():string|null{
      return localStorage.getItem('token');
    }
    isLoggedIn(){
      return this.getToken()==null;
    }
    getName(){
      return "Raghavendra";
    }
    logout(){
      localStorage.removeItem('token');
      this.route.navigate(['home']);
    }
    loginA(emailid:any,password:any):Observable<any>{
      if(emailid=='abc@gmail.com' && password=='admin123'){
        this.setToken('abc');
        return of({name:this.getName(),emailid:'abc@gmail.com'});
      }
      return throwError(new Error("Failed to Login"));
    }
  getIntern() {
    return this.http.get(this.url+"learner");
     }
     storeData(intern:any){
      console.log(intern);
     return  this.http.post(this.url+"save",intern,{responseType:'text'});
    }

    updateData(interns:any){
      console.log(interns);
      return this.http.put(this.url+"update",interns,{responseType:'text'});
    }
    /*updateData(mobile: number, interns:any){
      //return this.http.put(this.url+"+update.mobile",interns);
      return this.http.put(this.url+"update/"+mobile,interns);
    }*/
   
    deleteData(mobile){
      console.log(mobile);
      return this.http.delete(this.url+"removelearner/"+mobile);
    }
    searchData(emailid:any){
      console.log(emailid);
        return this.http.get(this.url+"getlearner/"+emailid);
    }
}
