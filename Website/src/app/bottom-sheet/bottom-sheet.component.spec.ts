import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetComponent } from './bottom-sheet.component';

import { RouterTestingModule } from '@angular/router/testing';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BottomSheetComponent', () => {
  let component: BottomSheetComponent;
  let fixture: ComponentFixture<BottomSheetComponent>;
  //let varbt:MatBottomSheetRef<BottomSheetComponent>;
  const moc={close:jasmine.createSpy('close')}
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,BrowserAnimationsModule]
      ,providers:[{provide:MatBottomSheetRef,useValue:moc}]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
