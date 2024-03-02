import { TemplateRef, ViewContainerRef } from '@angular/core';
import { HideshowDirective } from './hideshow.directive';

describe('HideshowDirective', () => {
  
  let ref:TemplateRef<any>
  let ViewCnd:ViewContainerRef;
  it('should create an instance', () => {
    const directive = new HideshowDirective(ViewCnd,ref);
    expect(directive).toBeTruthy();
  });
});
