import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule,FormsModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  userList:any=[];
  show:boolean = true;
  constructor(private http:HttpClient,private objCommonser:CommonService){
    this.getUser(0);
    this.objCommonser.behaviourSubject.subscribe(res=>{
      if(res!=''){
        console.log(res);
      }
    })

  }
  showModal:boolean =false;
  cobjuserdet:any = '';
  pageNo:number=1;
  fromFooter(event:any){
    console.log(event);
  }
  getUser(pageno:number){
    this.http.get("https://reqres.in/api/users?page="+pageno).subscribe((res:any)=>{
      console.log(res);
      this.userList = res['data'];
    });
  }
  loadMoreDetails(userobj:any)
  {
    console.log(userobj);
    this.cobjuserdet = userobj;
    this.showModal = true;
  }
  CloseModal(){
    this.showModal=false;
  }
  pageNoSelect(){
    this.getUser(this.pageNo);
  }
}
