import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a number to count found tracks', () => {
    expect(component.numberOfTracksFound).toBeDefined();
  });

  it('should have a list of found tracks', () => {
    expect(component.foundTracks).toBeDefined();
  });

  it('should have a list of missed tracks', () => {
    expect(component.missedTracks).toBeDefined();
  });

});
