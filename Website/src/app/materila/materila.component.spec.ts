import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterilaComponent } from './materila.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('MaterilaComponent', () => {
  let component: MaterilaComponent;
  let fixture: ComponentFixture<MaterilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterilaComponent,BrowserModule,BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
