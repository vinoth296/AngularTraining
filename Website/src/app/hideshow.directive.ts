import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideshow]',
  standalone: true
})
export class HideshowDirective {

  @Input() set appHideshow(con:boolean){
    this.action(con);
  }
  constructor(private view1:ViewContainerRef,private template:TemplateRef<any>) {

   }
   action(condition:boolean){
    console.log('hi');
    if(condition){
      this.view1.clear;
    }else{
      this.view1.createEmbeddedView(this.template);
    }
   }

}
