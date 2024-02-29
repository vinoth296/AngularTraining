import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private objcomm:CommonService){}
  //this.objcomm.
  registerForm= new FormGroup({
    firstName : new FormControl('',[Validators.required,Validators.maxLength(5)]),
    address : new FormControl(),
    email : new FormControl('',[Validators.required,Validators.email])    

  });
  //console.log(this.objcomm.name);
  formSubmit(){
    console.log(this.registerForm);
    console.log(this.registerForm.invalid);

  }
}
