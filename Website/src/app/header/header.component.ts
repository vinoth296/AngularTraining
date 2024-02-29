import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private rout:Router,private objCommonserv:CommonService){

  }
  @Input() parentName = '';
  @Input() currentPage = '';
  userRole:String = 'User';
  Logout(){
    localStorage.removeItem('token');
    this.rout.navigateByUrl('login');

  }
}
