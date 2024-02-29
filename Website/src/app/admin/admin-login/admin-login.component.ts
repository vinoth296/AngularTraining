import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CommonService } from '../../common.service';

@Component({
    selector: 'app-admin-login',
    standalone: true,
    templateUrl: './admin-login.component.html',
    styleUrl: './admin-login.component.css',
    imports: [HeaderComponent]
})
export class AdminLoginComponent {
constructor(private common:CommonService){
  
}
}
