import { BgColorDirective } from './bg-color.directive';

describe('BgColorDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };
    
    const directive = new BgColorDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
