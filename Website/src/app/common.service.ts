import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private router:Router,private http:HttpClient) { 
  }
  // get(url:string){
  //   return this.http.get(url);
  // }
  // post(url:string,data:{}){
  //   return this.http.post(url,data);
  // }

  get<T>(url:string){
    return this.http.get<T>(url);
  }
  post<T>(url:string,data:{}){
    return this.http.post<T>(url,data);
  }


  name:any='test';
  checkToken():boolean{
    let token = localStorage.getItem('token');
    if (token == undefined || token == ""){
      this.router.navigateByUrl('login');
      return false;
    }else{
      return true;
    }
  }
  behaviourSubject = new BehaviorSubject<string>("");
  
}
