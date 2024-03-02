import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appBgColor]',
  standalone: true
})
export class BgColorDirective {
@Input() colors= 'yellow';
  constructor(private ele:ElementRef) { 
    console.log(ele.nativeElement.style.backgroundColor );
    //this.ele.nativeElement.style.backgroundColor = this.colors;

  }
  ngAfterViewInit(){
    console.log(this.colors);
    this.ele.nativeElement.style.backgroundColor = this.colors;
  }
@HostListener("mouseenter") onMouseenter(){
  this.ele.nativeElement.style.backgroundColor = 'blue';

}
@HostListener("mouseleave") onMouseLeave(){
  this.ele.nativeElement.style.backgroundColor = 'green';

}
}
