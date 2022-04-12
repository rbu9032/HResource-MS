import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrservicesService {
  url:string="http://localhost:9002/api/";
  constructor(private http:HttpClient) { }
  
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
    deleteData(interrns:any){
      console.log(interrns);
      return this.http.put(this.url+"delete",interrns,{responseType:'text'});
    }
}
