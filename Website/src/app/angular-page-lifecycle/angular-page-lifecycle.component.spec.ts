import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPageLifecycleComponent } from './angular-page-lifecycle.component';

describe('AngularPageLifecycleComponent', () => {
  let component: AngularPageLifecycleComponent;
  let fixture: ComponentFixture<AngularPageLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularPageLifecycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularPageLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
