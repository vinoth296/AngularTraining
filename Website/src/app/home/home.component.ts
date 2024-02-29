import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private rout:Router,private objCommonser:CommonService){
  this.objCommonser.behaviourSubject.subscribe(res=>{
    if(res!=''){
      console.log(res);
    }
  })
  console.log(this.objCommonser.name);
  let token = localStorage.getItem('token');
    // if (token == undefined || token == ""){
    //   rout.navigateByUrl('login');
    // }
}

getDate(){
  let d = new Observable(o=>{setTimeout(()=>{
    o.next(1),
    o.next(2),
    o.complete()
  },1000)})
  return d;
}

getObservable(){
  this.getDate().subscribe(res=>{ console.log("subscript",res)});
}

eleRes:any[] = [
  {"name":"first Name","type":"text"},
  {"name":"last Name","type":"text"},
  {"name":"choose work mode","type":"radio"},
  {"name":"Country","type":"select","list":["city1","city2","city3"]}
]
}
