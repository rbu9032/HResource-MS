import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrservicesService {
  url:string="http://localhost:9001/api/";
  constructor(private http:HttpClient) { }
  getEmployees() {
    return this.http.get(this.url+"getallemployees");
     }
}
