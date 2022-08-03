import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NananereComponent } from './nananere.component';

describe('PlaylistComponent', () => {
  let component: NananereComponent;
  let fixture: ComponentFixture<NananereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NananereComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NananereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
