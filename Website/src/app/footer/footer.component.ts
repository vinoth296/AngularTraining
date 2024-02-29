import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private objCommservice:CommonService){

  }
  text='';
  @Output() toParent = new EventEmitter();
  callParent(){
    this.objCommservice.behaviourSubject.next(this.text);
    this.toParent.next("from footer component");
  }

   
}
