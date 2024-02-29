import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterilaComponent } from './materila.component';

describe('MaterilaComponent', () => {
  let component: MaterilaComponent;
  let fixture: ComponentFixture<MaterilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterilaComponent]
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
