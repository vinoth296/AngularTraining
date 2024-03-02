import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-page-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './angular-page-lifecycle.component.html',
  styleUrl: './angular-page-lifecycle.component.css'
})
export class AngularPageLifecycleComponent {

  constructor(){
    console.log('constructor log');
  }
  ngOnInit() {
    console.log('OnInit');
  }

  ngOnChanges(){
    console.log('ng on Change');
  }

  ngDoCheck(){
    console.log('ng Do Check');
  }

  ngAfterContentInit(){
    console.log('ng after content int');
  }

  

}
