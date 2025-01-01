import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEventTrackerComponent } from './parent-event-tracker.component';

describe('ParentEventTrackerComponent', () => {
  let component: ParentEventTrackerComponent;
  let fixture: ComponentFixture<ParentEventTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentEventTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentEventTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
