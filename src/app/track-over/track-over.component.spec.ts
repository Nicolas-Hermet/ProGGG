import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackOverComponent } from './track-over.component';

describe('TrackOverComponent', () => {
  let component: TrackOverComponent;
  let fixture: ComponentFixture<TrackOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackOverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a boolean to catch success or failure', () => {
    expect(component.success).toBeDefined();
  });
});
