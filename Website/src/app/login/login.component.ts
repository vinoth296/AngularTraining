import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
interface userLogin {"token":''};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private http:HttpClient,private rout:Router,private objcom:CommonService){

  }

  
  email:string = '';
  email1:string= '';
  pwd:string ='';
  errorMsg:string = '';
  loginAPI(){
    
    if(this.email==""){
      this.errorMsg = "Please enter Email";
      alert(this.errorMsg);
    }else if(this.pwd==""){
      this.errorMsg = "Please Enter password";
      alert(this.errorMsg);
    }else{
      //this.errorMsg = "login success";
      let data ={
        "email": this.email,
        "password": this.pwd
    }
      // this.http.post('https://reqres.in/api/login',data).subscribe((res:any)=>{
      //   console.log(res);
      //   this.errorMsg = res['token'];
      //   localStorage.setItem("token",res['token']);
      //   //this.commser.storeToken(res['token']);
      //   alert('Success Login');
      //   this.rout.navigateByUrl("home");
      // },err=>{
      //   this.errorMsg = err['error']['error'];
      //   alert(this.errorMsg);
      //   console.log(err['error']);
      // });

      this.objcom.post<userLogin>('https://reqres.in/api/login',data).subscribe((res:any)=>{
        console.log(res);
        this.errorMsg = res['token'];
        localStorage.setItem("token",res['token']);
        //this.commser.storeToken(res['token']);
        alert('Success Login');
        this.rout.navigateByUrl("home");
      },err=>{
        this.errorMsg = err['error']['error'];
        alert(this.errorMsg);
        console.log(err['error']);
      });


    }
  }

}
